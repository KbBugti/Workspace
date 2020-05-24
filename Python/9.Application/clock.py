# IMPORTS
# ==========================================
import tkinter
import time

# rootdow
# ==========================================
# This is an rootdow
root = tkinter.Tk()

root.title("A simple clock with Python Tkinter")

# screen_width = root.rootfo_screenwidth()
# screen_height = root.rootfo_screenheight()

# root_pos_x = int((screen_width / 2) - 250)
# root_pos_y = int((screen_height / 2) - 150 - 55)


# root.geometry(f"500x300+{root_pos_x}+{root_pos_y}")


root.geometry('500x300')
# root.Label(root, text = 'Geeksforgeeks', font=('sans sarif', 15)).pack(side = TOP, pady = 10)
# root.Button(root, text = 'Enter here').pack()


# CREATE AND CONFING THE CONTENT
# ==========================================
title = tkinter.Label()
clock = tkinter.Label()

title["text"] = "Your current time is:"
title["font"] = ("Open Sans", 14)

clock["text"] = ("ERROR")
clock["font"] = ("Open Sans", 32)
clock["bg"] = "#fff"


# PUT THE LABELES ON THE GRID
root.rowconfigure(0, weight = 0)
root.rowconfigure(1, weight = 1)
root.columnconfigure(0, weight = 1)

title.grid(row=0, column=0)
clock.grid(row=1, column=0)

root.minsize(width=600, height=400)
root.maxsize(width=600, height=400)


# clock.pack()
# title.pack()



# Clock logic function
# ==========================================
def update_time():
  clock["text"] = time.strftime("%H:%M:%S %p")
  root.after(1000, update_time)
  update_time()




# THIS WILL LOOP EVERYTHING INSIDE THE rootDOW
# Should be the last line!
root.mainloop()

