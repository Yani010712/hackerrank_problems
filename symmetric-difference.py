Task
# Given  sets of integers,  and , print their symmetric difference in ascending order. The term symmetric difference
#  indicates those values that exist in either  or  but do not exist in both.

n = int(input())
a = set(map(int, input().split()))
m = int(input())
b = set(map(int, input().split()))

for i in sorted(a.union(b)-a.intersection(b)):
    print(i)