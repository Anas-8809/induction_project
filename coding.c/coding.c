#include<stdio.h>
int main(){
    int a=5;
    int b=3;
    a=a-b;
    b=a+b;
    a=b-a;
    printf("a=%d , b=%d",a,b);

}