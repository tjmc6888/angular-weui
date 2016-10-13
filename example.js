var image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==';
var icon  = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=';
var qpic  = 'http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/';

angular
	.module('weui', ['ng-weui','ui.router'])
	.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

    	//set router
    	$urlRouterProvider.otherwise("/index");

        var tpls = [
            'index', 
            'button', 
            'input', 
            'list', 
            'uploader', 

            'article', 
            'flex', 
            'footer', 
            'gallery', 
            'grid', 
            'icons', 
            'loadmore', 
            'panel', 
            'preview', 
            'progress', 

            'actionsheet', 
            'dialog', 
            'msg', 
            'msg_success', 
            'msg_warn', 
            'toast', 

            'navbar', 
            'tabbar', 

            'searchbar', 
            
            'layers', 
        ]

        angular.forEach(tpls, function(value, key){
            $stateProvider.state(value, {
                url: '/' + value, 
                templateUrl: 'tpl/' + value + '.html', 
            })
        })
    })
	
	.controller('ExampleCtrl', function($scope, $timeout, $state, weuiToast, weuiDialog, weuiActionSheet, weuiGallery, weuiFileReader){
        $scope.panelAppmsg = [
            {
                image: image,
                icon: icon,
                title: '标题一',
                desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                source: '百度新闻',
                time: '2016-04-24',
                other: ''
            },
            {
                image: image,
                icon: icon,
                title: '标题一',
                desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                source: '百度新闻',
                time: '2016-04-24',
                other: ''
            }
        ]

        $scope.more = function() {
            $scope.panelAppmsg.push({
                image: image,
                icon: icon,
                title: '标题一',
                desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                source: '百度新闻',
                time: '2016-04-24',
                other: ''
            })
            console.log($scope.panelAppmsg)
        }

        $scope.showToast = function() {
            weuiToast.message({
                type: 'default',
                timer: 1500,
                text: '已完成',
                success: function() {
                    console.log('已完成')
                }
            })
        }

        $scope.showToastErr = function() {
            weuiToast.message({
                type: 'forbidden',
                timer: 1500,
                text: '禁止操作',
                success: function() {
                    console.log('禁止操作')
                }
            })
        }

        $scope.showLoadingToast = function() {
            $scope.loadingToast = !0
            $timeout(function() {
                $scope.loadingToast = !1
            }, 1500)
        }

        $scope.openDialog1 = function() {
            weuiDialog.open({
                type: 'confirm',
                className: 'confirm',
                title: '弹窗标题',
                text: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
                buttons: [
                    {
                        text: '辅助操作',
                    },
                    {
                        text: '主操作',
                    }
                ],
                cancel: function(){
                    console.log('cancel')
                },
                confirm: function(){
                    console.log('confirm')
                }
            })
        }

        $scope.openDialog2 = function() {
            weuiDialog.open({
                type: 'alert',
                className: 'alert',
                title: '弹窗标题',
                text: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
                cancel: function(){
                    console.log('cancel')
                },
                confirm: function(){
                    console.log('confirm')
                }
            })
        }

        $scope.showActionSheet = function() {
            var hideSheet = weuiActionSheet.show({
                buttons: [
                    {
                        text: '示例菜单',
                        className: 'red'
                    },
                    {
                        text: '示例菜单',
                        className: 'red'
                    },
                    {
                        text: '示例菜单',
                        className: 'red'
                    }
                ],
                buttonClicked: function(index, value) {
                    console.log(index, value)
                    return !0
                },
                cancelText: '取消',
                cancel: function() {
                    console.log('取消')
                },
                destructiveText: '删除',
                destructiveButtonClicked: function(){
                    console.log('删除')
                    return !0
                }
            })

            // $timeout(function() {
            //     hideSheet();
            // }, 2000);
        }

        $scope.onSuccess = function() {
            $state.go('msg')
        }
        
        $scope.onWarn = function() {
            $state.go('msg')
        }

        $scope.images = ['images/pic_160.png', 'images/pic_160.png', 'images/pic_160.png']

        $scope.showGallery = function() {
            var hideGallery = weuiGallery.show({
                url: 'images/pic_160.png',
                cancel: function() {
                    console.log('cancel')
                },
                delete: function(value) {
                    console.log(value)
                    console.log('delete')
                }
            })

            // $timeout(function() {
            //     hideGallery();
            // }, 2000);
        }
	})
    .controller('weuiFileReader', function($scope, weuiGallery, weuiFileReader){
        var self = this
        self.preview = []
        self.getFile = function() {
            console.log('原图', self.file)
            weuiFileReader.readAsDataUrl(self.file, $scope)
            .then(function(data){
                self.preview.push(data)
                var json = {}
                json.base64 = data
                console.log('原图base64', json)
            })
        }
        self.showGallery = function(index, url) {
            weuiGallery.show({
                url: url,
                cancel: function() {
                    console.log('cancel')
                },
                delete: function(value) {
                    self.preview.splice(index, 1)
                    $scope.$apply()
                    console.log('delete')
                }
            })
        }
    })
    .controller('weuiFileOptimization', function($scope, weuiGallery, weuiFileOptimization){
        var self = this
        self.preview = []
        self.getFile = function() {
            console.log('原图', self.file)
            weuiFileOptimization.resizeFile(self.file)
            .then(function(data){
                self.preview.push(data.base64)
                console.log('Canvas 压缩', data)
            })
        }
        self.showGallery = function(index, url) {
            weuiGallery.show({
                url: url,
                cancel: function() {
                    console.log('cancel')
                },
                delete: function(value) {
                    self.preview.splice(index, 1)
                    $scope.$apply()
                    console.log('delete')
                }
            })
        }
    })