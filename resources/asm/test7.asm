mov $0, %rax
L:
add $1, %rax
cmp %rax, $10
jl L
mov $10101, %rax