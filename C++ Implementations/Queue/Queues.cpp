#include <iostream>
#include <queue>
using namespace std;

void show(queue <int> g){
	queue <int> temp = g;
	while(!temp.empty()) {
	    cout << "\t" << temp.front();
	    temp.pop();
	}
	cout << "\n";
}

int main()
{
	queue <int> gq;
	gq.push(10);
	gq.push(20);
	gq.push(30);
	cout << "Queue becomes:";
	show(gq);
	cout << "Size: " << gq.size() << "\n";
	cout << "Front: " << gq.front() << "\n";
	cout << "Back: " << gq.back() << "\n";	
	cout << "Popped\n";
	cout << "Queue becomes:";
	gq.pop();
	show(gq);
	cout << "Queue becomes:";
	gq.pop();
	show(gq);

	return 0;
}