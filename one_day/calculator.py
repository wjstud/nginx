#!/usr/bin/env python3
import sys

print(sys.argv,len(sys.argv))
if int(sys.argv[1]).isdigit():
	if not len(sys.argv) == 2:
	    print("Parameter Error")
	else:
	    a = int(sys.argv[1]) - 3500
	    if a <= 1500:
		print('{}'.format(a*0.03, '.2f'))
	    elif a > 1500 and a <= 4500:
		print('{}'.format(a*0.1-105, '.2f'))
	    elif a > 4500 and a <= 9000:
		print('{}'.format(a*0.2-555, '.2f'))
	    elif a > 9000 and a <= 35000:
		print('{}'.format(a*0.25-1005, '.2f'))
	    elif a > 35000 and a <= 55000:
		print('{}'.format(a*0.3-2755, '.2f'))
	    elif a > 55000 and a <= 80000:
		print('{}'.format(a*0.35-5505, '.2f'))
	    else:
		print('{}'.format(a*0.45-13505, '.2f'))
else:
    print("Parameter Error")


         
