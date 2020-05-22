#include <bits/stdc++.h>
#define ll long long int
using namespace std;

ll nm(ll N)
{
    ll M = 10;
    ll ans = 1LL % M;
    for (int i = 2; i <= N; i++)
    {
        ans = ((i % M) * (ans % M)) % M;
    }
    return ans;
}

ll unitDigitXRaisedY(ll x, ll y)
{

    int res = 1;
    for (int i = 0; i < y; i++)
        res = (res * x) % 10;

    return res;
}

int main()
{
    ll x, n;
    cin >> x >> n;
    if(n < 4){
    cout << unitDigitXRaisedY(x, nm(n));
    }else{
        cout << 1;
    }

    return 0;
}
