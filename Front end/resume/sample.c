#include <stdio.h>
#include "roop.h"

// Function declaration
int add(int a, int b);

int main() {
    int num1, num2, sum;
    
    // Input two numbers
    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);
    
    // Function call
    sum = add(num1, num2);
    
    // Display result
    printf("Sum = %d\n", sum);
    
    return 0;
}

// Function definition

