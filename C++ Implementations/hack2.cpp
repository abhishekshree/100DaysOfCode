#include <bits/stdc++.h>
#define for(i,n) for(i=0;i<n;i++)
#define ll long long
using namespace std;
int main() {
    cin.sync_with_stdio(0);
    ll int t;
    cin >> t;
    while(t--){
        ll int side ;
        cin >> side;
        cout << ((side)*(side-1) + 1) << "\n";
    }
    return 0;
}