const baaperTaka = 100000;
function patroChai(age, earning) {
    // console.log(trueAge);
    var decision = canMarry(150000);
    console.log(decision);
    console.log(age);
    console.log(earning);

    var trueAge = age + 7;

    function canMarry(expense) {
        const remaining = baaperTaka + earning - expense;
        if (remaining > 1000) {
            const showing = 500;
            console.log(showing);
            return true;
        }
        return false;
    }
}
patroChai(21, 500000);