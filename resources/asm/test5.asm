mov $1, %rax
mov $10, %rdi
imulq $2, %rax
sub $1, %rdi
test %rdi, %rdi
jne $-4