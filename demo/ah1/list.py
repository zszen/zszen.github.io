import os 
import sys
import re
import shutil

path_join = "https://zszen.github.com/demo/ah1"
folder = "."

# with open(folder,'r')
path1 = os.listdir(folder)
for file1 in path1:
  str1 = "%s/%s"%(folder,file1)
  if os.path.isdir(str1) and str1!=".DS_Store":
    print(file1)
    path2 = os.listdir(str1)
    for file2 in path2:
      str2 = "%s/%s"%(str1,file2)
      # print(str2)
      if os.path.isdir(str2) and str2!=".DS_Store":
        path3 = os.listdir(str2)
        for file3 in path3:
          str3 = "%s/%s"%(str2,file3)
          if os.path.isdir(str3) and str3!=".DS_Store":
            print("%s/%s"%(path_join,str3))