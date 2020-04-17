#include <iostream>
using namespace std;

int top = -1;

void push(int stack[], int x, int n){
    if (top == n-1){
        cout << "Stack if full." << "\n";
    }else
    {
        top = top+1;
        stack[top] = x;
    }
}

bool isEmpty(){
    if (top == -1)
    {
        return true;
    }else
    {
        return false;
    }
}

void pop(int stack[], int n){
    if(isEmpty()){
        cout << "Stack is empty";
    }else
    {
        top = top-1;

    }
}

int size(){
    return top + 1;
}

void viewStack(int stack[],int n){
    for (int i = 0; i < n; i++)
    {
        cout << stack[i] << " ";
    }
}

int main(int argc, char const *argv[])
{
    int stack[3];
    push(stack, 5, 2);
    push(stack, 10,2);
    push(stack, 12,2);
    
    viewStack(stack, 2);

    return 0;
}