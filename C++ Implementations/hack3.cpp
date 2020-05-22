#include <bits/stdc++.h>
#define ll long long int
using namespace std;

ll largestDiv(ll n, ll z){
    ll ans=0;
    for (ll i = 1; i <= n; i++)
    {
        if(n%i==0 && i%z!=0){
            ans=i;
        }
    }
    

    return ans;
}

int main(int argc, char *argv[]){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int t;
    cin >> t;
    while (t>0){
        ll n, k, f=0;
        cin >> n >> k;
        for (ll i = 1; i <= n ; i++)
        {
            f+=largestDiv(i, k);
        }
        cout << f << '\n';
        t = t-1;
        
    }
    return 0;
}

int findLargestDivisor(int n) 
{ 
    for (int i = 2; i < sqrt(n) + 1; i++) { 
          
        // If the number is divisible 
        // by i*i, then remove one i 
        while (n % (i * i) == 0) { 
            n = n / i; 
        } 
    } 
    
    // Now all squares are removed from n 
    return n;     
} 