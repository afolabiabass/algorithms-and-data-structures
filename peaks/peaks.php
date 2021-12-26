<?php

function solution($A)
{
    $n = count($A);
    if ($n == 0) return 0;
    $result = 0;
    for ($i = 1; $i < $n; $i++) {
        if ($i < ($n - 1)) {
            if ($A[$i] > $A[$i - 1]) {
                if ($A[$i] > $A[$i + 1]) {
                    $result += 1;
                }
            }
        }
    }

    return $result;
}
