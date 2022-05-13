export class BubbleSort {
    static list: number[] = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];

    public static bubbleSort(list:number[]):void{
        let needNextPass = true
        for (let i = 1; i < list.length&&needNextPass; i++) {
            needNextPass = false
            for (let j =0; j <list.length- i; j++) {
                if(list[j]>list[j+1]){
                    [list[j],list[j+1]] = [list[j +1],list[j]]
                    // let temp:number = list[j]
                    // list[j]=list[j+1]
                    // list[j+1] = temp

                    needNextPass = true;
                }
            }
        }
    }
}

BubbleSort.bubbleSort(BubbleSort.list);
for (let i = 0; i < BubbleSort.list.length; i++)
    console.log(BubbleSort.list[i] + " ");
