# Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

def sockMerchant(n, ar):
    pairs = 0
    for color in set(ar):
        pairs += ar.count(color)//2
    return pairs