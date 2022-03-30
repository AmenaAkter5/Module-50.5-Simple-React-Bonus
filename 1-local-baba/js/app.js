

/* 
database এ আমরা data রাখতে পারি object আকারে। এর quantity কত আমরা
তা সহজে access করতে পারবো

database এ কীভাবে data রাখতে হয়, আবার তা access করতে হয় 

এ ধরণের জিনিস বুঝার জন্য এখন local storage টা দেখবো।
*/


// add item to database


let db = {};

const addToDb = item => {

    // three ways to add a property to an object

    // 1. db.alom = 1;
    // 2. db['alom'] = 1;
    // 3. db[item] = 1; [dynamic way]



    // ========================================

    // step - 1

    /* 
    reload হওয়ার পর সে তার db কে আবার empty object করে দিচ্ছে।

    নতুন কোন data set করলে সে নতুন ভাবে add হবে আগের data গুলোর
    সাথে add হবে না। কারণ আমরা আগের data গুলোকে access করছি না।

    reload হওয়ার পর আগের object local storage এ থাকছে তবে আগের
    data সহ set না করায় আগের data সরে গিয়ে কেবল নতুন data নিচ্ছে।

    আগের data কে db তে বসাচ্ছি না তাই empty db তে কেবল new data add
    হচ্ছে।

    তাই আমাদের stored data কে আগে access করতে হবে। যদি stored
    data থাকে তাকে আমরা আগে access করে তার সাথে new data add করবো।

    এজন্য আগের data আছে কিনা 'getItem' দিয়ে access করে একে JSON এ
    parse করে নিবো এবং তারপর একে 'db' তে set করে দেবো।

    তারপর db তে আগের item এর quantity বাড়াবো আর নতুন করে কোন 
    item add হলে তার value 1 করবো।

    এটা আমরা বাইরেও check করতে পারি। 
    */

    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        db = JSON.parse(storedCart);
    }


    // step - 2:

    /* 
    check করে নিচ্ছি যে add করার জন্য item টা database এ আগেই আছে কিনা।

    database এ থাকলে তার value হবে item টার আগের valueর চাইতে 1 বেশি।

    আর item টা আগে না থাকলে এর initial value হবে 1
    */


    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }

    // step - 3: local storage এ 'db' কে set করলাম

    localStorage.setItem('shopping-cart', JSON.stringify(db));
}




// add item from database


const removeItem = item => {

    /* 
    item remove করতে হলে stored cart টা কে access করে নিতে হবে।
    */
    const storedCart = localStorage.getItem('shopping-cart');

    // stored cart আছে কিনা check করে নিবো

    if (storedCart) {

        // JSON এ parse করে নিতে হবে
        const storedObject = JSON.parse(storedCart);

        // parse করা object থেকে item টা remove করতে হবে
        delete storedObject[item];

        // delete করার পর বাকি cart কে stringify করে set করে দিতে হবে
        localStorage.setItem('shopping-cart', JSON.stringify(storedObject))
    }
};
