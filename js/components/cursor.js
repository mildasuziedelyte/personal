let cursor = {
    // delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    // cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    // $outline: document.querySelector('.cursor-dot-outline'),
    
    init: function() {
        // Set up element sizes
        // this.dotSize = this.$dot.offsetWidth;
        // this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        // this.animateDotOutline();
    },
    
//     updateCursor: function(e) {
//         var self = this;
        
//         console.log(e)
        
//         // Show the cursor
//         self.cursorVisible = true;
//         self.toggleCursorVisibility();

//         // Position the dot
//         self.endX = e.pageX;
//         self.endY = e.pageY;
//         self.$dot.style.top = self.endY + 'px';
//         self.$dot.style.left = self.endX + 'px';
//     },
    
    setupEventListeners: function() {
        let self = this;
        let smallDot = document.querySelector(".cursor-dot");
        // let largeDot = document.querySelector(".cursor-dot-outline");

        
        // Anchor hovering
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                smallDot.style.width = "40px";
                smallDot.style.height = "40px";
                smallDot.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            });
            el.addEventListener('mouseout', function() {
                smallDot.style.width = "10px";
                smallDot.style.height = "10px";
                smallDot.style.backgroundColor = "black";
            });
        });
        
        // Click events
        // document.addEventListener('mousedown', function() {
        //     self.cursorEnlarged = true;
        //     self.toggleCursorSize();
        // });
        // document.addEventListener('mouseup', function() {
        //     self.cursorEnlarged = false;
        //     self.toggleCursorSize();
        // });
  
  
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY - 4 + 'px';
            self.$dot.style.left = self.endX - 4 + 'px';
        });
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            // self.$dot.style.opacity = 1;
            // self.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            // self.$dot.style.opacity = 0;
            // self.$outline.style.opacity = 0;
        });
    },
    
    // animateDotOutline: function() {
    //     let self = this;
        
    //     self._x += (self.endX - self._x) / self.delay;
    //     self._y += (self.endY - self._y) / self.delay;
    //     self.$outline.style.top = self._y + 'px';
    //     self.$outline.style.left = self._x + 'px';
        
    //     requestAnimationFrame(this.animateDotOutline.bind(self));
    // },
    
    // toggleCursorSize: function() {
    //     let self = this;
        
    //     if (self.cursorEnlarged) {
    //         self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
    //         self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    //     } else {
    //         self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
    //         self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
    //     }
    // },
    
    toggleCursorVisibility: function() {
        let self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            // self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            // self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();