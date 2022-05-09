import {Stack} from "./Stack";
import {Queue} from "./Queue";


function checkSymmetry(a: string) {
    let count = 0
    let flag = true;
    let stack = new Stack(100, a)
    let queue = new Queue(a)

    while (count<stack.size()) {
        let stackCheck = stack.pop()
        let queueCheck = queue.dequeue()
        if (stackCheck !== queueCheck) {
            flag = false
            break;
        }
        count++
    }
    if (flag === true) {
        console.log('chuỗi đối xứng')
    } else {
        console.log('chuỗi không đối xứng')
    }
}

checkSymmetry('able was I ere I saw elba')