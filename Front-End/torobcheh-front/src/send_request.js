export function send_request(method, end_point, params=null) {
    let xhttp = new XMLHttpRequest();
    xhttp.addEventListener("readystatechange", () => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                // request successful
                let data = JSON.parse(xhttp.responseText);
                console.log('data:', data);
                return data;
            } else {
                // request failed
                console.log("error getting data")
            }
        }
    });
    console.log('--');
    xhttp.open(method, "http://localhost:3000/api/" + end_point);
    if (params)
        xhttp.send(params);
    else
        xhttp.send();
}