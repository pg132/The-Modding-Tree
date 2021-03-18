// IMPORTANT
/*

need to add a way to bulk buy stones
I think there should be another row 16 button that toggles bulk
Bulk is very simple, it buys up to the maximum number of stones **AT THE CURRENT MOMENT**
that means itll act weird for things like stone 111 but thats fine :)




/*
*/

var BOOST_MONEY = [11, 31, 61, 33, 101, 73, 81, 43, 83, 131, 64] // stone storage num
var EXTRA_BEST_ORDER = [132, 134, 212, 141, 
                        312, 142, 213, 321, 
                        232, 133, 135, 224, 
                        313, 223, 131, 145, 
                        143, 231, 233, 234, ] // stone id

var FIXED_MISSION_DATA = {
        1: {
                requirement: new Decimal(789),
                amountType: "h challs",
                name: "<b>H</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(.1),
                rewardOnce: new Decimal(20),  
                id: 1,
        },
        2: {
                requirement: new Decimal(79),
                amountType: "diamond key",
                name: "<b>Diamond Keys</b>",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(.15),
                rewardOnce: new Decimal(50),  
                id: 2,
        },
        3: {
                requirement: new Decimal(353),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(.2),
                rewardOnce: new Decimal(100),  
                id: 3,
        },
        4: {
                requirement: Decimal.pow(10, 2000),
                amountType: "m points",
                name: "<b>M</b>",
                progress: "log", //lin, log, exp
                rewardPassive: new Decimal(.3),
                rewardOnce: new Decimal(300),  
                id: 4,
        },
        5: {
                requirement: new Decimal(355),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(.2),
                rewardOnce: new Decimal(1000),  
                id: 5,
        },
        6: {
                requirement: Decimal.pow(10, 4000),
                amountType: "m points",
                name: "<b>M</b>",
                progress: "log", //lin, log, exp
                rewardPassive: new Decimal(.3),
                rewardOnce: new Decimal(1300),  
                id: 6,
        },
        7: {
                requirement: Decimal.pow(10, 4567).times(1.23),
                amountType: "m points",
                name: "<b>M</b>",
                progress: "log", //lin, log, exp
                rewardPassive: new Decimal(.5),
                rewardOnce: new Decimal(2500),  
                id: 7,
        },
        8: {
                requirement: new Decimal(362),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(.6),
                rewardOnce: new Decimal(3000),  
                id: 8,
        },
        9: {
                requirement: new Decimal(365),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(.6),
                rewardOnce: new Decimal(3500),  
                id: 9,
        },
        10: {
                requirement: new Decimal(388),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(.9),
                rewardOnce: new Decimal(4000),  
                id: 10,
        },
        11: {
                requirement: new Decimal(392),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(1.2),
                rewardOnce: new Decimal(4500),  
                id: 11,
        },
        12: {
                requirement: new Decimal(396),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(1.5),
                rewardOnce: new Decimal(8000),  
                id: 12,
        },
        13: {
                requirement: new Decimal(400),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(1.9),
                rewardOnce: new Decimal(9000),  
                id: 13,
        },
        14: {
                requirement: new Decimal(410),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(2.4),
                rewardOnce: new Decimal(10000),  
                id: 14,
        },
        15: {
                requirement: new Decimal(420),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(3),
                rewardOnce: new Decimal(12000),  
                id: 15,
        },
        16: {
                requirement: new Decimal(430),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(4),
                rewardOnce: new Decimal(15000),  
                id: 16,
        },
        17: {
                requirement: new Decimal(460),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(5),
                rewardOnce: new Decimal(20000),  
                id: 17,
        },
        18: {
                requirement: new Decimal(480),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(6),
                rewardOnce: new Decimal(25000),  
                id: 18,
        },
        19: {
                requirement: new Decimal(500),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(7),
                rewardOnce: new Decimal(30000),  
                id: 19,
        },
        20: {
                requirement: new Decimal(520),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(9),
                rewardOnce: new Decimal(35000),  
                id: 20,
        },
        21: {
                requirement: new Decimal(540),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(12),
                rewardOnce: new Decimal(45000),  
                id: 21,
        },
        22: {
                requirement: new Decimal(560),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(14),
                rewardOnce: new Decimal(60000),  
                id: 22,
        },
        23: {
                requirement: new Decimal(580),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(17),
                rewardOnce: new Decimal(80000),  
                id: 23,
        },
        24: {
                requirement: new Decimal(600),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(20),
                rewardOnce: new Decimal(10e4),  
                id: 24,
        },
        25: {
                requirement: new Decimal(620),
                amountType: "k challs",
                name: "<b>K</b> challenge completions",
                progress: "lin", //lin, log, exp
                rewardPassive: new Decimal(25),
                rewardOnce: new Decimal(12e4),  
                id: 25,
        },
}

function getMissionsAmount(s){
        if (s == "none") return 0
        let layer = s.split(" ")[0];
        let attr = s.split(" ")[1];
        if (attr == "challs"){
                return totalChallengeComps(layer);
        }
        if (attr == "points"){
                return player[layer].points;
        }
        if (attr == "key"){
                if (layer == "diamond") return player.k.lock.repeatables[82]
        }
        console.log("adsahshdashdba")
        return 0
}


function getMissionProgress(data){
        let req = data.requirement
        let amt = getMissionsAmount(data.amountType)
        if (data.progress == "lin"){
                return Decimal.div(amt, req).toNumber()
        }
        if (data.progress == "log"){
                if (new Decimal(req).lt(1)) return 0
                return Decimal.div(Decimal.ln(amt), Decimal.ln(req)).toNumber()
        }
        if (data.progress == "exp"){
                return Decimal.pow(2, Decimal.sub(amt, req)).toNumber()
        }
}

function getNextMission(){
        let data = player.m.missions
        let comp = data.completed
        let curr = data.currentMissions
        for (i = 1; i <= Object.keys(FIXED_MISSION_DATA).length; i ++) {
                if (comp.list.includes(i)) continue
                for (j in curr){
                        k = curr[j]
                        if (k.id == i) continue
                }
                return FIXED_MISSION_DATA[i]
        }
        console.log("OOOPS")
        let x = player.m.missions.completed.total
        if (x >= 25 && x < 1000) {
                x = new Decimal(x)
                return {
                        requirement: Decimal.pow(10, Decimal.pow(2, x)),
                        amountType: "m points",
                        name: "<b>M</b>",
                        progress: "log", //lin, log, exp
                        rewardPassive: new Decimal(x + 3),
                        rewardOnce: new Decimal(x).pow(3),  
                        id: x + 1,
                }
        }
        
}

function isMissionComplete(data){
        return Decimal.gte(getMissionsAmount(data.amountType), data.requirement)
}

function getMissionOnceRewardChangeFactor(){
        let ret = 1
        if (hasUpgrade("l", 42)) ret *= 5
        if (player.m.stoneUpgrades.includes(175)) ret *= 20
        return new Decimal(ret)
}

function attemptCompleteMission(id){
        let data2 = player.m.missions
        data = data2.currentMissions[id]
        if (!isMissionComplete(data)) return 
        data2.money = data2.money.plus(data.rewardOnce.div(getMissionOnceRewardChangeFactor()))
        data2.moneyPassive = data2.moneyPassive.plus(data.rewardPassive)
        data2.currentMissions = data2.currentMissions.slice(0, id).concat(data2.currentMissions.slice(id+1))
        data2.completed.list.push(data.id)
        data2.completed.total ++
        // remove the given mission
}

function getTaxRate(){
        let ret = .0002
        if (hasUpgrade("l", 42)) ret *= 5
        if (player.m.stoneUpgrades.includes(175)) ret *= 20
        if (player.m.stoneUpgrades.includes(192)) ret *= 2
        if (player.m.stoneUpgrades.includes(193)) ret *= 1.25
        return ret
}

function isUsingBest(id){
        if (EXTRA_BEST_ORDER.slice(0,player.m.bestStonesCurrent).includes(getStoneNumber(id))) {
                return true
        }
        if (id ==  11) return hasUpgrade("l", 44)
        if (id ==  12) return player.m.stoneUpgrades.includes(173)
        if (id ==  13) return player.m.stoneUpgrades.includes(172)
        if (id ==  14) return player.m.stoneUpgrades.includes(182)
        if (id ==  15) return player.m.stoneUpgrades.includes(202)
        if (id ==  21) return player.m.stoneUpgrades.includes(173)
        if (id ==  22) return player.m.stoneUpgrades.includes(174)
        if (id ==  23) return player.m.stoneUpgrades.includes(172)
        if (id ==  24) return player.m.stoneUpgrades.includes(182)
        if (id ==  25) return player.m.stoneUpgrades.includes(202)
        if (id ==  31) return false
        if (id ==  32) return false
        if (id ==  33) return false
        if (id ==  34) return false
        if (id ==  35) return false
        if (id ==  41) return false
        if (id ==  42) return false
        if (id ==  43) return false
        if (id ==  44) return player.m.stoneUpgrades.includes(191)
        if (id ==  45) return false
        if (id ==  61) return false
        if (id ==  62) return false
        if (id ==  63) return false
        if (id ==  64) return false
        if (id ==  71) return player.m.stoneUpgrades.includes(183)
        if (id ==  72) return player.m.stoneUpgrades.includes(183)
        if (id ==  73) return false
        if (id ==  74) return false
        if (id ==  81) return false
        if (id ==  82) return false
        if (id ==  83) return false
        if (id ==  84) return false
        if (id == 101) return false
        if (id == 102) return false
        if (id == 103) return false
        if (id == 111) return false
        if (id == 112) return player.m.stoneUpgrades.includes(192)
        if (id == 131) return false

        if (Math.random() < .04) console.log(id)
        return false
}

function getMoneyPerSecond(doSoftcap = true){
        let ret = player.m.missions.moneyPassive
        for (i in BOOST_MONEY){
                ret = ret.plus(tmp.m.clickables[BOOST_MONEY[i]].effect)
        }
        if (hasUpgrade("m", 24)) ret = ret.plus(.2)
        if (hasUpgrade("l", 43)) ret = ret.plus(2e6)

        for (i = 11; i < 156; i++){
                if (tmp.m.clickables[i] == undefined) continue
                ret = ret.sub(tmp.m.clickables[i].passiveCost)
        }

        if (doSoftcap) ret = softcap(ret, "money")

        ret = ret.plus(getPebbleEffect())

        return ret.max(0)
}

function getActualMoneyPerSecond(){
        let a = player.m.missions.money.times(getTaxRate())
        let ret = getMoneyPerSecond().sub(a)
        return ret
}

function doPassiveMoneyGeneration(diff){
        //now we need to estimate the remaining time
        let b = new Decimal(getTaxRate()) // b
        let c = getMoneyPerSecond() // c
        let x = player.m.missions.money //x

        if (c.sub(b.times(x)).eq(0)) { 
                //if its equal then we just end
                return 
        } else if (c.sub(b.times(x)).gt(0)) { //increasing
                let alpha = c.sub(b.times(x)).ln().div(b).times(-1)
                player.m.missions.money = c.sub(Decimal.pow(Math.E, alpha.plus(diff).times(b).times(-1))).div(b)
        } else if (!player.m.stoneUpgrades.includes(174)) {//decreasing
                let alpha = b.times(x).sub(c).ln().div(b).times(-1)
                player.m.missions.money = c.plus(Decimal.pow(Math.E, alpha.plus(diff).times(b).times(-1))).div(b)
        }

        /*
        dx/dt = c-bx
        dx/(c-bx) = dt
        -ln(c-bx)/b = t + alpha
        ln(c-bx) = -b(t+alpha)
        c-bx = e^(-b(t+alpha))
        x = c-e^(-b(t+alpha)) all times 1/b

        OTHER SIDE: 
        -ln(bx-c)/b = t + alpha
        ln(bx-c) = -b(t+alpha)
        -c+bx = e^(-b(t+alpha))
        x = c+e^(-b(t+alpha)) all times 1/b
        CALC :)
        */
}

function updateBestPerTier(){
        // layers.m.clickables.totalPerTier(1)
        data = player.m.bestPerTier
        for (let i = 1; i <= 5; i++){
                data[i] = data[i].max(layers.m.clickables.totalPerTier(i))
        }
}

function updateMissions(diff){
        let data = player.m.missions
        let data2 = player.m
        doPassiveMoneyGeneration(diff)
        data.bestMoney = data.bestMoney.max(data.money)

        if (isNaN(data.money.mag)) {
                data.money = new Decimal(0)
                console.log(player)
                console.log(data.money)
        }

        for (let i = 0; i < data.currentMissions.length; i ++){
                attemptCompleteMission(i)
        } // check if youve completed them
        
        if (data.maxMissions > data.currentMissions.length){
                data.currentMissions.push(getNextMission())
        } // give new goals if so


        // update bestStones
        for (i in data2.stones) {
                data2.bestStones[i] = data2.bestStones[i].max(data2.stones[i])
        }
        updateBestPerTier()
        if (player.m.stoneUpgrades.includes(182)) syncBestT1Stones()
        if (player.m.stoneUpgrades.includes(183)) syncBestT2Stones()
        if (player.m.stoneUpgrades.includes(184)) syncBestT3Stones()
        if (player.m.stoneUpgrades.includes(202)) addBestT1Stones()
        if (player.m.stoneUpgrades.includes(211)) addBestT2Stones()

        if (hasUpgrade("l", 43)) {
                //buy pebble buys once per tick
                layers.m.buyables[41].buy()
                layers.m.buyables[43].buy()
                layers.m.buyables[42].buy()
                layers.m.buyables[51].buy()
        }
}

function addBestT1Stones(){
        let amt = tmp.m.clickables[202].effect.floor()
        player.m.bestStones[12] = player.m.bestStones[12].max(amt)
}

function addBestT2Stones(){
        let amt = tmp.m.clickables[211].effect.floor()
        player.m.bestStones[62] = player.m.bestStones[62].max(amt)
}

function syncBestT1Stones(){
        let data = player.m.bestStones
        let ids = getUnlockedStonesIDs().filter(x => x < 60)
        let a = new Decimal(0)
        for (i in ids){
                j = ids[i]
                if (BOOST_MONEY.includes(j)) continue
                a = a.max(data[j])
        }
        for (i in ids){
                j = ids[i]
                data[j] = data[j].max(a)
        }   
}

function syncBestT2Stones(){
        let data = player.m.bestStones
        let ids = getUnlockedStonesIDs().filter(x => x < 100 && x > 60)
        let a = new Decimal(0)
        for (i in ids){
                j = ids[i]
                if (BOOST_MONEY.includes(j)) continue
                a = a.max(data[j])
        }
        for (i in ids){
                j = ids[i]
                data[j] = data[j].max(a)
        }   
}

function syncBestT3Stones(){
        let data = player.m.bestStones
        let ids = getUnlockedStonesIDs().filter(x => x < 130 && x > 100)
        let a = new Decimal(0)
        for (i in ids){
                j = ids[i]
                if (BOOST_MONEY.includes(j)) continue
                a = a.max(data[j])
        }
        for (i in ids){
                j = ids[i]
                data[j] = data[j].max(a)
        }   
}

function syncBestT4Stones(){
        let data = player.m.bestStones
        let ids = getUnlockedStonesIDs().filter(x => x < 150 && x > 130)
        let a = new Decimal(0)
        for (i in ids){
                j = ids[i]
                if (BOOST_MONEY.includes(j)) continue
                a = a.max(data[j])
        }
        for (i in ids){
                j = ids[i]
                data[j] = data[j].max(a)
        }   
}

function syncBestT5Stones(){
        let data = player.m.bestStones
        let ids = getUnlockedStonesIDs().filter(x => x < 160 && x > 150)
        let a = new Decimal(0)
        for (i in ids){
                j = ids[i]
                if (BOOST_MONEY.includes(j)) continue
                a = a.max(data[j])
        }
        for (i in ids){
                j = ids[i]
                data[j] = data[j].max(a)
        }   
}

function getUnlockedStonesIDs(){
        let a = []
        let b = Object.keys(tmp.m.clickables)
        for (i in b) {
                j = b[i]
                if (isNaN(Number(j))) continue 
                if (Number(j) >= 160) continue
                if (tmp.m.clickables[j].unlocked) a.push(Number(j))
        }
        return a
}

function makeMissionsDecimal(){
        let d = player.m.missions.currentMissions
        for (i in d){
                if (d[i].rewardOnce) d[i].rewardOnce = new Decimal(d[i].rewardOnce)
                if (d[i].rewardPassive) d[i].rewardPassive = new Decimal(d[i].rewardPassive)
                if (d[i].requirement) d[i].requirement = new Decimal(d[i].requirement)
        }
}

function getShiftDownDisplay(id){
        let a = "Currently this stone is taking " + format(tmp.m.clickables[id].passiveCost) + " money/s"
        let b = "<br><br>Clicking now will sell a stone"
        let c = "<br>Your best number of stones is " + formatWhole(player.m.bestStones[id])
        return a + c + b
}

function getShiftUpEnding(id, character){
        let a = BOOST_MONEY.includes(id) ? "/s" : ""
        let b = isUsingBest(id) ? " (" + formatWhole(player.m.bestStones[id]) + ")" : ""
        let c = "You have " + formatWhole(player.m.stones[id]) + b + " stones<br>"
        let d = "Currently: " + character + format(tmp.m.clickables[id].effect) + a + "<br>"
        let e = "Requirement: " + format(tmp.m.clickables[id].requirement) + " money/s<br>"
        let start = "<bdi style='font-size:80%'>"
        let end = "</bdi>"
        return start + c + d + e + end
}

function getPebbleGain(){
        let data = player.m.pebbles
        let gain = new Decimal(player.m.stoneUpgrades.includes(184) ? 1 : 0)
        gain = gain.times(tmp.m.buyables[41].effect)
        gain = gain.times(tmp.m.buyables[42].effect)
        gain = gain.times(tmp.m.buyables[43].effect)
        gain = gain.times(tmp.m.buyables[51].effect)
        gain = gain.times(tmp.m.buyables[52].effect)
        gain = gain.times(tmp.m.clickables[111].effect)
        return gain
}

function updatePebbles(diff){
        let data = player.m.pebbles
        data.amount = data.amount.plus(getPebbleGain().times(diff))
}

function getPebbleEffect(){
        let amt = player.m.pebbles.amount

        let ret = amt.plus(1).log10()

        if (ret.gt(10)) ret = ret.log10().pow(2).times(10)
        if (ret.gt(100)) ret = ret.log10().pow(2).times(25)
        
        return ret
}

function getStoneNumber(id){
        if (id < 60) return id + 100
        if (id < 100) return id + 150
        if (id < 130) return id + 210
        if (id < 150) return id + 280
        return id + 360
}








