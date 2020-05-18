# BUILD-IN FUNCTIONS
# ===========================================

print("whatever")
print("whatever", "and", "ever")

age = 12
print("age is :", age)

# print("list", [1,2,3], sep=":", end="----")

# MAX, MIN ROUND
# MAX & MIN
i = [3,6,78,12]
# print("max value is :", max(1))
# print("max value is :", max(1))

num = 3.2351
print("rounded number :", round(num, 2))


# INPUT
# input_val = input("Please enter your birth year: ")
# calc_age = 2020 - int(input_val)

# print("Your age is:", calc_age)


# CUSTOM FUNCTIONS
# ===========================================
def calc(x, y = 0):
    # pass / you con't have an empty function, so use pass to have an valide
 return x + y

print(calc(2, 8))



# Importing
# from datetime import date

# today = date.today()
# print("Today's date:", today)

age = 32
# print("His age is :", + age + "year old")



import time

local = time.localtime()
current_year = local.tm_year;
def calc_age():
   input_birth = input("Birth year, please")
    return current_year - int(input_birth)

print(calc_age())
    

