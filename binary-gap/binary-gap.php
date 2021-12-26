<?php

function solution($N)
{
    if ($N > 2147483647 && $N < 1) {
        return 0;
    }

    $bin = str_split((string)decbin($N));
    $lngBinaryGap = 0;
    $currentLngBinaryGap = 0;
    $isFirstOne = false;
    $isSecondOne = false;
    foreach ($bin as $digit) {
        if (!$isFirstOne && $digit == 1) {
            $isFirstOne = true;
        }

        if ($isFirstOne && $digit == 0) {
            $currentLngBinaryGap += 1;
        }

        if ($isFirstOne && $digit == 1) {
            $lngBinaryGap = ($currentLngBinaryGap > $lngBinaryGap) ? $currentLngBinaryGap : $lngBinaryGap;
            $currentLngBinaryGap = 0;
        }
    }

    return $lngBinaryGap;
}

echo solution(110000000000000000000000000101);

