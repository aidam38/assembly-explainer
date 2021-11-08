(ns assembly-explainer.compiler.core)

(def instructions ["mov" "movq" "movl" "movdd" "movw"
                   "push" "pushq" "pushl" "pushw"
                   "pop" "popq" "popl" "popd" "popw"
                   "mul" "mulq" "mull" "muld" "mulw"
                   "imul" "imulq" "imull" "imuld" "imulw"
                   "add" "sub"
                   "jmp", "jeq", "jne",
                   "test"])

(def registers [:a :b :c :d :si :di :bp :sp :ip :8 :9 :10 :11 :12 :13 :14 :15])

(def descriptors {"al" {:size 1 :reg :a}
                  "bl" {:size 1 :reg :b}
                  "cl" {:size 1 :reg :c}
                  "dl" {:size 1 :reg :d}
                  "sil" {:size 1 :reg :si}
                  "dil" {:size 1 :reg :di}
                  "bpl" {:size 1 :reg :bp}
                  "spl" {:size 1 :reg :sp}
                  "ipl" {:size 1 :reg :ip}

                  "ax" {:size 2 :reg :a}
                  "bx" {:size 2 :reg :b}
                  "cx" {:size 2 :reg :c}
                  "dx" {:size 2 :reg :d}
                  "si" {:size 2 :reg :si}
                  "di" {:size 2 :reg :di}
                  "bp" {:size 2 :reg :bp}
                  "sp" {:size 2 :reg :sp}
                  "ip" {:size 2 :reg :ip}

                  "eax" {:size 4 :reg :a}
                  "ebx" {:size 4 :reg :b}
                  "ecx" {:size 4 :reg :c}
                  "edx" {:size 4 :reg :d}
                  "esi" {:size 4 :reg :si}
                  "edi" {:size 4 :reg :di}
                  "ebp" {:size 4 :reg :bp}
                  "esp" {:size 4 :reg :sp}
                  "eip" {:size 4 :reg :ip}

                  "rax" {:size 8 :reg :a}
                  "rbx" {:size 8 :reg :b}
                  "rcx" {:size 8 :reg :c}
                  "rdx" {:size 8 :reg :d}
                  "rsi" {:size 8 :reg :si}
                  "rdi" {:size 8 :reg :di}
                  "rbp" {:size 8 :reg :bp}
                  "rsp" {:size 8 :reg :sp}
                  "rip" {:size 8 :reg :ip}})