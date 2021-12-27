<?php

function solution($a) {
    // Write your solution here...
    $stringArray = str_split($a);
    $isValid = true;
    
    $parathensisFound = 0;
    $curlyBracket = 0;
    $squareBracket = 0;
    
    foreach($stringArray as $stringItem) {
        if ($stringItem === '(') {
            $parathensisFound += 1;
        }
        
        if ($stringItem === ')' && $parathensisFound <= 0) {
            return false;
        } else if ($stringItem === ')' && $parathensisFound > 0) {
            $parathensisFound -= 1;
        }
        
        if ($stringItem === '{') {
            $curlyBracket += 1;
        }
        
        if ($stringItem === '}' && $curlyBracket <= 0) {
            return false;
        } else if ($stringItem === '}' && $curlyBracket > 0) {
            $curlyBracket -= 1;
        }
        
        if ($stringItem === '[') {
            $squareBracket += 1;
        }
        
        if ($stringItem === ']' && $squareBracket <= 0) {
            return false;
        } else if ($stringItem === ']' && $squareBracket > 0) {
            $squareBracket -= 1;
        }
    }
    
    if ($parathensisFound != 0 || $curlyBracket != 0 || $squareBracket != 0) {
        return false;
    }
    
    return $isValid;
}


$a = trim(fgets(STDIN));

$result = solution($a);

echo $result;

?>