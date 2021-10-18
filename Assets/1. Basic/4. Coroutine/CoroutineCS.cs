using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CoroutineCS : MonoBehaviour
{
    private int curent;
    void Start()
    {
        curent = 0;
        Debug.Log("start routine");
        this.StartCoroutine(this.DoRoutine());
    }

    IEnumerator DoRoutine() {
        while(true) {
            Debug.Log( "[" + this.curent++.ToString() + "] Wait to next routine..");
            yield return new WaitForSeconds(1f);
        }
    }
}
