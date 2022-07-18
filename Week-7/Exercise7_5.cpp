#include <iostream>
#include <stack>
using namespace std;
 
void findNextGreaterElements(int arr[], int n) {
    int res[n];
    stack<int> s;
 
    for (int i = n - 1; i >= 0; i--) {
        if (!s.empty()) {
            while (!s.empty() && s.top() <= arr[i]) {
                s.pop();
            }
        }
        res[i] = s.empty() ? -1 : s.top();
        s.push(arr[i]);
    }
 
    for (int i = 0; i < n; i++)
        cout << arr[i] << " --> " << res[i] << endl;
}

int main()
{
    int arr[] = { 2, 7, 3, 5, 4, 6, 8 };
    int n = sizeof(arr) / sizeof(arr[0]);

    findNextGreaterElements(arr, n); 
    return 0;
}

// Time Complexity: O(n)