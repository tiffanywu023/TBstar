// 辅助线函数
var ckXian = function() {
    var body  = document.querySelector('body')
    var style ='<style id="xm" media="screen"> * {outline: 1px red dashed!important} </style>'
    var i = false
    body.addEventListener('keydown', function(event) {
        if (event.keyCode === 77 && event.ctrlKey) {
            if (i) {
                var styletog = document.querySelector('#xm')
                styletog.remove()
                i = false
            } else {
                body.insertAdjacentHTML('afterbegin', style)
                i = true
            }
        }
    })
}() // 加载代码 使用 Ctrl + M 显示参考线

//评价
var showComment = function(index) {
    var commentId = '#id-case-' + String(index)
    var commentCurrent = e(commentId)
    commentCurrent.classList.remove('hidden')
}

var hideComment = function() {
    var number = parseInt(e('.comment').dataset.comments)
    for(i = 1; i <= number; i++){
        var commentId = '#id-case-' + String(i)
        var allComment = e(commentId)
        allComment.classList.add('hidden')
    }
}

var evaluateMouseover = function() {
    bindAll('.star', 'mouseover', function(event) {
        var target = event.target
        log('移到哪里了', target)
        var number = parseInt(target.dataset.id)
        // log('number是多少', number)
        for(i = 1; i <= number; i++) {
            var starId = '#id-star-' + String(i)
            // log('starId是什么', starId)
            var totalStar = e(starId)
            // log('totalStar是什么', totalStar)
            totalStar.src = 'img/star.png'
        }
        var index = String(number)
        showComment(index)
    })
}

var evaluateMouseout = function() {
    bindAll('.star', 'mouseout', function(event) {
        var number = parseInt(e('.starBox').dataset.imgs)
        log('number是什么', number)
        for(i = 1; i <= number; i++){
            var starId = '#id-star-' + String(i)
            var allStar = e(starId)
            allStar.src = 'img/blankStar.png'
        }
        hideComment()
    })
}



var _main = function() {
    evaluateMouseover()
    evaluateMouseout()
}

_main()