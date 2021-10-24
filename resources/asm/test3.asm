mov $1, %rax
mov $2, %rbx
mov %rax, $0(%rsp)
mov %rbx, $8(%rsp)
mov $8(%rsp), %rax
mov $0(%rsp), %rbx