# NUMBERS

# ====================================

# Integers
num_int = 5
# print( type (num_int) )

# Floats
num_float = 5.35
# print( type(num_float) )


# Type conversion
# print(type(str))


# str_int = int("3.25")
# print(type(str_int))

# str_float = float ("3.25")


# STRINGS
# ============================================
# Multi lines string
str_one_line = "Nobody is new in the twon"

# Multi lines string
str_multi_lines = '''
1
2
3
4
'''
# print(str_multi_lines)



# Strings Methods
# ===========================================

s = "Python"
ss = "i have no cats"

# Lenght of the string
print(len(s))

# Word capitalisition
print(s.capitalize())
print(s.upper())
print(ss.lower())

print(ss.title())


# Replace parts of the string
print(ss.replace("cats", "dogs"))


print(ss.split())

print(ss.split("a"))
print(ss.split("a", 1))



# CONCATENATION
# ===========================================

# In Python you can concatenate only strings
concat = str(3) + "3"
# print(concat)

name = "Mr"
age = 27

print("her name: " + name + str(age) + ", ")

# phrase = name + "her name: " + str(age)

# The coolest way to concatenate
# phrase = f"{name} is {age} yours old"

# phrase = "{} is {} years old. {}?".format(name, age, age)
# print(phrase)

# BOOLENS
# ===========================================

b_true = True
b_false = False
b_null = None



# COLLECTIONS (python array)
# ===========================================
# It is a list
mylist = [1,2,3,4]
# print(1[2])


# DICTIONARY

d = {
  "first_name" : "MR",
  "last_name" : "nobdy",
  "age": 28
}

d["first_name"]  = "bob"

print(d["first_name"])


# TUPLES (immutable)
t = ("january", "february", "march")
print(t[1])


# SET
sl = {"apple", "", "car", 56}
s2 = {1,23,36,41,53,64,75}
print(s2)