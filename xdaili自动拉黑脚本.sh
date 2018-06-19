#!/usr/bin

#ÿ��
#dates=`date +%d/%b/20%y:%H:%M:%S`
#ÿ�֣�ͳ��ÿ����ip�ۼƷ��ʴ�����IP
dates=`date +%d/%b/20%y:%H:%M:`
time=`date`
#��ʱ�ļ������IP
tmpfile="/usr/local/nginx/logs/iplists"
check_log=/usr/local/nginx/logs/chk_ip_checkip.log
log=/usr/local/nginx/logs/access.log
exefile=/usr/local/nginx/logs/exefile.sh
iplog=/usr/local/nginx/logs/ippullback.log

tail -n 5000000 $log|grep "$dates"|awk '{print$1}'| sort| uniq -c | sort -n > $tmpfile

#�鿴��ʱIP�ļ������һ�У����ip����ͳ�ƴ���������ֵ���˳�
lastline=`tail -n 1 $tmpfile|awk '{print$1}'`
if [ -z $lastline ]||[ $lastline -lt 1800 ];then
  echo "${time}-->no ip be pulled black." >> $check_log
  exit 0;
fi

#cat $tmpfile
#�����ʱip�ļ����棬ĳϵIP�ۼƷ��ʴ���������ֵ������
cat $tmpfile|grep -v "60.191.4.194"|grep -v "139.196.109.40"|awk '{if($1>1800) print"/usr/sbin/ipset add blacklist "$2}' > $exefile
cat $tmpfile|grep -v "60.191.4.194"|grep -v "139.196.109.40"|awk '{if($1>1800) print "'$dates' --> "  $2" ���ʴ���:"$1}' >> $iplog
/bin/sh $exefile
#cat $exefile
#tail $tmpfile

if [ $? -eq 0 ];then
  echo "${time}-->"`cat $exefile|wc -l`" ip be pulled black." >> $check_log
fi

log_count=`cat $check_log |wc -l`
if [ $log_count -gt 20000 ];then
  sed -i '1,3000d' $check_log
fi
