export interface Tree<E>{
    insert(e:E):boolean;
    inorder():void;
    getSize():number;
}