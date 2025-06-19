//PAGE 2
const crd_1_btn = document.querySelectorAll('.card-1-button')
const crd_1_result = document.getElementById('crd-1-result') // Badge 1 result
const crd_2_btn = document.querySelectorAll('.card-2-button')
const crd_2_result = document.getElementById('crd-2-result') // Badge 2 result
const crd_3_btn = document.querySelectorAll('.card-3-button')
const crd_3_result = document.getElementById('crd-3-result') // Badge 3 result
const crd_4_btn = document.querySelectorAll('.card-4-button')
const crd_4_result = document.getElementById('crd-4-result') // Badge 4 result
const crd_5_btn = document.querySelectorAll('.card-5-button')
const crd_5_result = document.getElementById('crd-5-result') // Badge 5 result
const crd_6_btn = document.querySelectorAll('.card-6-button')
const crd_6_result = document.getElementById('crd-6-result') // Badge 6 result

let bdg_1_Answered = false;    // condition 1 
let bdg_2_Answered = false;    // condition 2 
let bdg_3_Answered = false;    // condition 3 
let bdg_4_Answered = false;    // condition 4 
let bdg_5_Answered = false;    // condition 5 
let bdg_6_Answered = false;    // condition 6 

function getComment(){
    const userComment = document.getElementById('commentBox').value;
}


let data = {
    generalRating: document.getElementById('result').textContent,
    security: document.getElementById('crd_1_result').textContent,
    service: document.getElementById('crd_2_result').textContent,
    comfortability: document.getElementById('crd_3_result').textContent,
    sanitation: document.getElementById('crd_4_result').textContent,
    transactionSpeed: document.getElementById('crd_5_result').textContent,
    technology: document.getElementById('crd_6_result').textContent,
    savedComment: document.getElementById('commentBox').value,
};


// Convert JavaScript object to JSON string
let jsonData = JSON.stringify(data);

// Send data to PHP script using AJAX (using Fetch API)
fetch('save_json.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: jsonData
})
.then(response => response.json())
.then(result => {
    console.log("Success:", result);
})
.catch(error => {
    console.error("Error:", error);
});


/*

const badgeData = {
    crd_result: '',
    crd_1_result: 'N/A',
    crd_2_result: 'N/A',
    crd_3_result: 'N/A',
    crd_4_result: 'N/A',
    crd_5_result: 'N/A',
    crd_6_result: 'N/A',
    userComment: 'N/A',
};

try {
    const response = await fetch('data.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({badgeData}),
    });

    // Check if the response status is OK (2xx)
    if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
    }

    // Try to parse the response as JSON
    const result = await response.json();
    console.log('Response JSON:', result);  // Logs the JSON response

} catch (error) {
    // Catch and log any errors that occur during the fetch or JSON parsing
    console.error('Error:', error.message);
}
*/

crd_1_btn.forEach(button => {
    button.addEventListener('click', () => {
        const crd_1_score = button.getAttribute('data-score');
        crd_1_result.textContent = `You have rated your experience as ${crd_1_score}!`;
        const badgeScore1 = button.getAttribute('data-badgeScore1');
        bdg_1_Answered = true;
        if (badgeScore1 == "A1"){
            document.getElementById('badge1').style.backgroundColor = '#9be09d';
        }
        else if (badgeScore1 == "A2"){
            document.getElementById('badge1').style.backgroundColor = '#c5faa1';
        }
        else if (badgeScore1 == "A3"){
            document.getElementById('badge1').style.backgroundColor = '#EDFA9A';
        }
        else if (badgeScore1 == "A4"){
            document.getElementById('badge1').style.backgroundColor = '#e9bb77';
        }
        else {document.getElementById('badge1').style.backgroundColor = '#fca195';}
    });
});

crd_2_btn.forEach(button => {
    button.addEventListener('click', () => {
        const crd_2_score = button.getAttribute('data-score');
        crd_2_result.textContent = `You have rated your experience as ${crd_2_score}!`;
        const badgeScore2 = button.getAttribute('data-badgeScore2');
        bdg_2_Answered = true;
        if (badgeScore2 == "B1"){
            document.getElementById('badge2').style.backgroundColor = '#9be09d';
        }
        else if (badgeScore2 == "B2"){
            document.getElementById('badge2').style.backgroundColor = '#c5faa1';
        }
        else if (badgeScore2 == "B3"){
            document.getElementById('badge2').style.backgroundColor = '#EDFA9A';
        }
        else if (badgeScore2 == "B4"){
            document.getElementById('badge2').style.backgroundColor = '#e9bb77';
        }
        else {document.getElementById('badge2').style.backgroundColor = '#fca195';}
    });
});

crd_3_btn.forEach(button => {
    button.addEventListener('click', () => {
        const crd_3_score = button.getAttribute('data-score');
        crd_3_result.textContent = `You have rated your experience as ${crd_3_score}!`;
        const badgeScore3 = button.getAttribute('data-badgeScore3');
        bdg_3_Answered = true;
        if (badgeScore3 == "C1"){
            document.getElementById('badge3').style.backgroundColor = '#9be09d';
        }
        else if (badgeScore3 == "C2"){
            document.getElementById('badge3').style.backgroundColor = '#c5faa1';
        }
        else if (badgeScore3 == "C3"){
            document.getElementById('badge3').style.backgroundColor = '#EDFA9A';
        }
        else if (badgeScore3 == "C4"){
            document.getElementById('badge3').style.backgroundColor = '#e9bb77';
        }
        else {document.getElementById('badge3').style.backgroundColor = '#fca195';}
    });
});

crd_4_btn.forEach(button => {
    button.addEventListener('click', () => {
        const crd_4_score = button.getAttribute('data-score');
        crd_4_result.textContent = `You have rated your experience as ${crd_4_score}!`;
        const badgeScore4 = button.getAttribute('data-badgeScore4');
        bdg_4_Answered = true;
        if (badgeScore4 == "D1"){
            document.getElementById('badge4').style.backgroundColor = '#9be09d';
        }
        else if (badgeScore4 == "D2"){
            document.getElementById('badge4').style.backgroundColor = '#c5faa1';
        }
        else if (badgeScore4 == "D3"){
            document.getElementById('badge4').style.backgroundColor = '#EDFA9A';
        }
        else if (badgeScore4 == "D4"){
            document.getElementById('badge4').style.backgroundColor = '#e9bb77';
        }
        else {document.getElementById('badge4').style.backgroundColor = '#fca195';}
    });
});

crd_5_btn.forEach(button => {
    button.addEventListener('click', () => {
        const crd_5_score = button.getAttribute('data-score');
        crd_5_result.textContent = `You have rated your experience as ${crd_5_score}!`;
        const badgeScore5 = button.getAttribute('data-badgeScore5');
        bdg_5_Answered = true;
        if (badgeScore5 == "E1"){
            document.getElementById('badge5').style.backgroundColor = '#9be09d';
        }
        else if (badgeScore5 == "E2"){
            document.getElementById('badge5').style.backgroundColor = '#c5faa1';
        }
        else if (badgeScore5 == "E3"){
            document.getElementById('badge5').style.backgroundColor = '#EDFA9A';
        }
        else if (badgeScore5 == "E4"){
            document.getElementById('badge5').style.backgroundColor = '#e9bb77';
        }
        else {document.getElementById('badge5').style.backgroundColor = '#fca195';}
    });
});

crd_6_btn.forEach(button => {
    button.addEventListener('click', () => {
        const crd_6_score = button.getAttribute('data-score');
        crd_6_result.textContent = `You have rated your experience as ${crd_6_score}!`;
        const badgeScore6 = button.getAttribute('data-badgeScore6');
        bdg_6_Answered = true;
        if (badgeScore6 == "F1"){
            document.getElementById('badge6').style.backgroundColor = '#9be09d';
        }
        else if (badgeScore6 == "F2"){
            document.getElementById('badge6').style.backgroundColor = '#c5faa1';
        }
        else if (badgeScore6 == "F3"){
            document.getElementById('badge6').style.backgroundColor = '#EDFA9A';
        }
        else if (badgeScore6 == "F4"){
            document.getElementById('badge6').style.backgroundColor = '#e9bb77';
        }
        else {document.getElementById('badge6').style.backgroundColor = '#fca195';}
    });
});

// BADGE 1
function badgeA1(){
    // Highlight emoji
    document.getElementById('A1').style.filter = 'grayscale(0%)';
    document.getElementById('A1').style.scale = '1.4';
    ['A2','A3','A4','A5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    // Change background color
    document.getElementById('badge1').style.backgroundColor = '#9be09d';
    crd_1_result.textContent = `You have rated your experience as very satisfying!`;
    bdg_1_Answered = true;
}

function badgeA2(){
    document.getElementById('A2').style.filter = 'grayscale(0%)';
    document.getElementById('A2').style.scale = '1.4';
    ['A1','A3','A4','A5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge1').style.backgroundColor = '#c5faa1';
    crd_1_result.textContent = `You have rated your experience as satisfying!`;
    bdg_1_Answered = true;
}

function badgeA3(){
    document.getElementById('A3').style.filter = 'grayscale(0%)';
    document.getElementById('A3').style.scale = '1.4';
    ['A1','A2','A4','A5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge1').style.backgroundColor = '#EDFA9A';
    crd_1_result.textContent = `You have rated your experience as neither satisfying nor unsatisfying!`;
    bdg_1_Answered = true;
}

function badgeA4(){
    document.getElementById('A4').style.filter = 'grayscale(0%)';
    document.getElementById('A4').style.scale = '1.4';
    ['A1','A2','A3','A5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge1').style.backgroundColor = '#e9bb77';
    crd_1_result.textContent = `You have rated your experience as unsatisfying!`;
    bdg_1_Answered = true;
}

function badgeA5(){
    document.getElementById('A5').style.filter = 'grayscale(0%)';
    document.getElementById('A5').style.scale = '1.4';
    ['A1','A2','A3','A4'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge1').style.backgroundColor = '#fca195';
    crd_1_result.textContent = `You have rated your experience as very unsatisfying!`;
    bdg_1_Answered = true;
}

// BADGE 2
function badgeB1(){
    document.getElementById('B1').style.filter = 'grayscale(0%)';
    document.getElementById('B1').style.scale = '1.4';
    ['B2','B3','B4','B5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge2').style.backgroundColor = '#9be09d';
    crd_2_result.textContent = `You have rated your experience as very satisfying!`;
    bdg_2_Answered = true;
}

function badgeB2(){
    document.getElementById('B2').style.filter = 'grayscale(0%)';
    document.getElementById('B2').style.scale = '1.4';
    ['B1','B3','B4','B5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge2').style.backgroundColor = '#c5faa1';
    crd_2_result.textContent = `You have rated your experience as satisfying!`;
    bdg_2_Answered = true;
}

function badgeB3(){
    document.getElementById('B3').style.filter = 'grayscale(0%)';
    document.getElementById('B3').style.scale = '1.4';
    ['B1','B2','B4','B5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge2').style.backgroundColor = '#EDFA9A';
    crd_2_result.textContent = `You have rated your experience as neither satisfying nor unsatisfying!`;
    bdg_2_Answered = true;
}

function badgeB4(){
    document.getElementById('B4').style.filter = 'grayscale(0%)';
    document.getElementById('B4').style.scale = '1.4';
    ['B1','B2','B3','B5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge2').style.backgroundColor = '#e9bb77';
    crd_2_result.textContent = `You have rated your experience as unsatisfying!`;
    bdg_2_Answered = true;
}

function badgeB5(){
    document.getElementById('B5').style.filter = 'grayscale(0%)';
    document.getElementById('B5').style.scale = '1.4';
    ['B1','B2','B3','B4'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge2').style.backgroundColor = '#fca195';
    crd_2_result.textContent = `You have rated your experience as very unsatisfying!`;
    bdg_2_Answered = true;
}

// BADGE 3
function badgeC1(){
    document.getElementById('C1').style.filter = 'grayscale(0%)';
    document.getElementById('C1').style.scale = '1.4';
    ['C2','C3','C4','C5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge3').style.backgroundColor = '#9be09d';
    crd_3_result.textContent = `You have rated your experience as very satisfying!`;
    bdg_3_Answered = true;
}

function badgeC2(){
    document.getElementById('C2').style.filter = 'grayscale(0%)';
    document.getElementById('C2').style.scale = '1.4';
    ['C1','C3','C4','C5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge3').style.backgroundColor = '#c5faa1';
    crd_3_result.textContent = `You have rated your experience as satisfying!`;
    bdg_3_Answered = true;
}

function badgeC3(){
    document.getElementById('C3').style.filter = 'grayscale(0%)';
    document.getElementById('C3').style.scale = '1.4';
    ['C1','C2','C4','C5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge3').style.backgroundColor = '#EDFA9A';
    crd_3_result.textContent = `You have rated your experience as neither satisfying nor unsatisfying!`;
    bdg_3_Answered = true;
}

function badgeC4(){
    document.getElementById('C4').style.filter = 'grayscale(0%)';
    document.getElementById('C4').style.scale = '1.4';
    ['C1','C2','C3','C5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge3').style.backgroundColor = '#e9bb77';
    crd_3_result.textContent = `You have rated your experience as unsatisfying!`;
    bdg_3_Answered = true;
}

function badgeC5(){
    document.getElementById('C5').style.filter = 'grayscale(0%)';
    document.getElementById('C5').style.scale = '1.4';
    ['C1','C2','C3','C4'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge3').style.backgroundColor = '#fca195';
    crd_3_result.textContent = `You have rated your experience as very unsatisfying!`;
    bdg_3_Answered = true;
}

// BADGE 4
function badgeD1(){
    document.getElementById('D1').style.filter = 'grayscale(0%)';
    document.getElementById('D1').style.scale = '1.4';
    ['D2','D3','D4','D5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge4').style.backgroundColor = '#9be09d';
    crd_4_result.textContent = `You have rated your experience as very satisfying!`;
    bdg_4_Answered = true;
}

function badgeD2(){
    document.getElementById('D2').style.filter = 'grayscale(0%)';
    document.getElementById('D2').style.scale = '1.4';
    ['D1','D3','D4','D5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge4').style.backgroundColor = '#c5faa1';
    crd_4_result.textContent = `You have rated your experience as satisfying!`;
    bdg_4_Answered = true;
}

function badgeD3(){
    document.getElementById('D3').style.filter = 'grayscale(0%)';
    document.getElementById('D3').style.scale = '1.4';
    ['D1','D2','D4','D5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge4').style.backgroundColor = '#EDFA9A';
    crd_4_result.textContent = `You have rated your experience as neither satisfying nor unsatisfying!`;
    bdg_4_Answered = true;
}

function badgeD4(){
    document.getElementById('D4').style.filter = 'grayscale(0%)';
    document.getElementById('D4').style.scale = '1.4';
    ['D1','D2','D3','D5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge4').style.backgroundColor = '#e9bb77';
    crd_4_result.textContent = `You have rated your experience as unsatisfying!`;
    bdg_4_Answered = true;
}

function badgeD5(){
    document.getElementById('D5').style.filter = 'grayscale(0%)';
    document.getElementById('D5').style.scale = '1.4';
    ['D1','D2','D3','D4'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge4').style.backgroundColor = '#fca195';
    crd_4_result.textContent = `You have rated your experience as very unsatisfying!`;
    bdg_4_Answered = true;
}

// BADGE 5
function badgeE1(){
    document.getElementById('E1').style.filter = 'grayscale(0%)';
    document.getElementById('E1').style.scale = '1.4';
    ['E2','E3','E4','E5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge5').style.backgroundColor = '#9be09d';
    crd_5_result.textContent = `You have rated your experience as very satisfying!`;
    bdg_5_Answered = true;
}

function badgeE2(){
    document.getElementById('E2').style.filter = 'grayscale(0%)';
    document.getElementById('E2').style.scale = '1.4';
    ['E1','E3','E4','E5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge5').style.backgroundColor = '#c5faa1';
    crd_5_result.textContent = `You have rated your experience as satisfying!`;
    bdg_5_Answered = true;
}

function badgeE3(){
    document.getElementById('E3').style.filter = 'grayscale(0%)';
    document.getElementById('E3').style.scale = '1.4';
    ['E1','E2','E4','E5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge5').style.backgroundColor = '#EDFA9A';
    crd_5_result.textContent = `You have rated your experience as neither satisfying nor unsatisfying!`;
    bdg_5_Answered = true;
}

function badgeE4(){
    document.getElementById('E4').style.filter = 'grayscale(0%)';
    document.getElementById('E4').style.scale = '1.4';
    ['E1','E2','E3','E5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge5').style.backgroundColor = '#e9bb77';
    crd_5_result.textContent = `You have rated your experience as unsatisfying!`;
    bdg_5_Answered = true;
}

function badgeE5(){
    document.getElementById('E5').style.filter = 'grayscale(0%)';
    document.getElementById('E5').style.scale = '1.4';
    ['E1','E2','E3','E4'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge5').style.backgroundColor = '#fca195';
    crd_5_result.textContent = `You have rated your experience as very unsatisfying!`;
    bdg_5_Answered = true;
}

// BADGE 6
function badgeF1(){
    document.getElementById('F1').style.filter = 'grayscale(0%)';
    document.getElementById('F1').style.scale = '1.4';
    ['F2','F3','F4','F5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge6').style.backgroundColor = '#9be09d';
    crd_6_result.textContent = `You have rated your experience as very satisfying!`;
    bdg_6_Answered = true;
}

function badgeF2(){
    document.getElementById('F2').style.filter = 'grayscale(0%)';
    document.getElementById('F2').style.scale = '1.4';
    ['F1','F3','F4','F5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge6').style.backgroundColor = '#c5faa1';
    crd_6_result.textContent = `You have rated your experience as satisfying!`;
    bdg_6_Answered = true;
}

function badgeF3(){
    document.getElementById('F3').style.filter = 'grayscale(0%)';
    document.getElementById('F3').style.scale = '1.4';
    ['F1','F2','F4','F5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge6').style.backgroundColor = '#EDFA9A';
    crd_6_result.textContent = `You have rated your experience as neither satisfying nor unsatisfying!`;
    bdg_6_Answered = true;
}

function badgeF4(){
    document.getElementById('F4').style.filter = 'grayscale(0%)';
    document.getElementById('F4').style.scale = '1.4';
    ['F1','F2','F3','F5'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge6').style.backgroundColor = '#e9bb77';
    crd_6_result.textContent = `You have rated your experience as unsatisfying!`;
    bdg_6_Answered = true;
}

function badgeF5(){
    document.getElementById('F5').style.filter = 'grayscale(0%)';
    document.getElementById('F5').style.scale = '1.4';
    ['F1','F2','F3','F4'].forEach(id => {
        document.getElementById(id).style.filter = 'grayscale(80%)';
        document.getElementById(id).style.scale = '1';
    });
    document.getElementById('badge6').style.backgroundColor = '#fca195';
    crd_6_result.textContent = `You have rated your experience as very unsatisfying!`;
    bdg_6_Answered = true;
}

