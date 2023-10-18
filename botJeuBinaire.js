/*
https://studio.code.org/projects/applab/iukLbcDnzqgoxuu810unLw
*/
let i = 0;
let result = 0;
let bits = 128;

function leProgramme() {
    let leResultat = document.getElementById(`BinaryRow${i}_decVal`);

    if (leResultat) {
        if (!leResultat.innerHTML) {
            
            result = 0;
            for (j = 0; j <= 7; j++) {
                inputValeursbinair = document.getElementById(`BinaryRow${i}_${7 - j}`)

                if (inputValeursbinair.innerHTML == 1) {
                    result = result + (Math.pow(2, j))
                }
            }
            console.log("fonctionne valeur inséré " + result)
            leResultat.value = result
        }
        else {
            console.log("fonctionne valeur detecté " + leResultat.innerHTML)
            j = 0;
            result = leResultat.innerHTML;

            for (bits = 128; bits >= 1; bits = bits / 2) {
                if ((result) % bits != result) {

                    result = result - bits;

                    inputValeursbinair = document.getElementById(`BinaryRow${i}_${j}`)
                    inputValeursbinair.click();
                }
                j++
            }
        }
    }
    else {
        console.log("attent")
        return
    }
    i++
}

setInterval(leProgramme, 1000)

