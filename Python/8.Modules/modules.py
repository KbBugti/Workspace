# MODULES
# ====================================

# IMPORT: Getting a module
# import math


# Create a module alias
import math as m

# See all the methods inside the math module

# print(dir (m))

# mf = m.floor(5.45)
# print(mf)

# mc = m.ceil(5.45)
# print(mc)


# You can import only the mehtods you need

from math import ceil, floor

# mf = m.floor(5.45)
# print(mf)

# mc = m.ceil(5.45)
# print(mc)


# Import custom mods and methods
# from mod import printus
# printus(3*3)



# TIME MODULES
# ====================================

import time
# print(dir(time))

local = time.localtime()
# print(local)


# from datetime import date

# today = date.today()
# print("Today's date:", today)


def calc_age():
  
  user_val = input("Your birth year please: ")
  
  if not user_val.isnumeric(): return "We need integer dude !"
  return local.tm_year - int(user_val)

  
#   if(isinstance(birth_year, int)):
#   return local.tm_year - birth_year
# else:
# return "We need integer dude !"

# print(calc_age(1993))


# time.sleep(5)

print( calc_age() )