from tkinter import *
import tkinter.font as font
from time import strftime 



# creating tkinter window 
root = Tk() 
root.title('A simple clock with Python Tkinter') 

  
  # CREATE AND CONFING THE CONTENT
# ==========================================


# This function is used to  
# display time on the label 
def time(): 
    string = strftime('%H:%M:%S %p') 
    lbl.config(text = string) 
    lbl.after(1000, time) 
  
# Styling the label widget so that clock 
# will look more attractive 
lbl = Label(root, font = ('Helvetica', 50, 'bold'), 
            background = 'gray', 
            foreground = 'red',
            )


# Placing clock at the centre 
# of the tkinter window 
lbl.pack(anchor = 'center') 
time() 





root.geometry('500x300')
# root.Label(root, text = 'Geeksforgeeks', font=('sans sarif', 15)).pack(side = TOP, pady = 10)
# root.Button(root, text = 'Enter here').pack()


# CREATE AND CONFING THE CONTENT
# ==========================================



# PUT THE LABELES ON THE GRID
root.rowconfigure(0, weight = 0)
root.rowconfigure(1, weight = 1)
root.columnconfigure(0, weight = 1)

root.minsize(width=600, height=400)
root.maxsize(width=600, height=400)


# screen_width = root.winfo_screenwidth()
# screen_height = root.winfo_screenheight()

# win_pos_x = int((screen_width / 2) - 250)
# win_pos_y = int((screen_height / 2) - 150 - 55)


  # define font


myFont = font.Font(size=20)
  
button = Button(root, text='Click here', bg='#0052cc', fg='#ffffff')
button.pack() 
button['font'] = myFont

root.mainloop()