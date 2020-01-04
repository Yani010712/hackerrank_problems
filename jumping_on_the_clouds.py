# Input Format:The first line contains an integer n , the total number of clouds. The second line contains n space-separated binary integers describing clouds c[i] where 0 <= i < n .

def jumpingOnClouds(c):
    jumps = 0
    i = 0
    while i < n - 1:
        if i + 2 >= n or c[i + 2] == 1: 
            i = i + 1
            jumps = jumps + 1
        else:
            i = i + 2
            jumps = jumps + 1
    return jumps