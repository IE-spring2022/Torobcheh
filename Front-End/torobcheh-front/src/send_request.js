export function send_request(method, end_point, body = null) {
    console.log('-----send req-----');
    console.log(end_point);
    console.log(body);
    console.log('------------------');

    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", () => {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    // request successful
                    let data = JSON.parse(xhttp.responseText);
                    resolve([true, data]);
                } else {
                    // request failed
                    // let data = JSON.parse(xhttp.responseText);
                    let data = xhttp.responseText;
                    console.log("error getting data:");
                    console.log(data);
                    resolve([false, data]);
                }
            }
        });
        xhttp.open(method, "http://localhost:3000/api/" + end_point);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        if (body)
            xhttp.send(body);
        else
            xhttp.send();
    })
}