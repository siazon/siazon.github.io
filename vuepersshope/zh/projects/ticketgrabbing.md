---
lang: zh-CN
title: Ticket grabbing
description: 页面的描述
date: 2023-03-01
category:
  - Tools
tag:
  - ABD
  - Android
  - Autohotkey
---
# RFIDSystem

## Introduce

ADB controls the smart phone and Autohotkey automates the workflow. This project uses the platform rules to achieve the goal of ticket-grabbing faster than human actions.

<!-- more -->
## Partial code
``` autohotkey

#x::
qty := 1 ;数量

global referX := 452
global referY := 983
WinGetPos, X, Y, Width, Height, A  ; "A" 表示获取活动窗口的位置.
global currWidth := Width
global currHeight := Height
global titleHeight := 30

global gap := 80 ;列表间隔
global inputFirst := [340,355] ;输入框
global btnQtyOK := [295,635] ;数量确定
global btnModule := [70,840] ;打新模块按钮
global btnStart := [80,945] ;长条申购按钮
global btnBack := [30,95] ;返回键
global tagNull := [266,545] ;未开始的红色三角标识
global orderheader := [300,330] ;订单Header
global btncheckAll := [35,945] ;全选按钮
global btnSubmit := [375,950] ;提交
global btnSubmitCheck := [315,670] ;申购确认
global btnOK := [235,765] ;确认
global btnFirst :=[35,350] ;第一个选框
stop := false

Loop
{

  GetKeyState, state, Shift
  if state = D
    stop := true
    WaitForModule()
      Sleep 20
  OnClick(btnModule[1],btnModule[2])
  Sleep 20
  ;等待列表加载061017
  WaitForShow()
  Sleep 20
  ;一键申购
  OnClick(btnStart[1],btnStart[2])
  waitOrderShow()
  waitForOrder()
  MsgBox 1
  
  ;hasCode := checkColor(188,335,0xF5F5F5)
  ;if(hasCode=true)
  ;{
  ;  return
  ;}
  ;login()
  isSuccsse :=isStart()
  if (isSuccsse=true)
  {
    stop := true
    Submit(qty)
  }
  else
  {
    Sleep 20
    ;返回
    OnClick(btnBack[1],btnBack[2])
    sleep 20
    OnClick(btnBack[1],btnBack[2])
  }
}
Until stop
;MsgBox Stop
return
Submit(qty)
{
  count := 0
  while (count <  qty)
  {
    y := inputFirst[2]
    Y := count * gap + y
    qtyInput(Y)
    count++
  }

  Sleep 50
  ;全选
  OnClick(btncheckAll[1],btncheckAll[2])
  Sleep 30
  ;提交
  OnClick(btnSubmit[1],btnSubmit[2])
  Sleep 50
  ;申购确认
  OnClick(btnSubmitCheck[1],btnSubmitCheck[2])
  Sleep 50
  ;申购确认
  OnClick(btnOK[1],btnOK[2])

}

; 输入数量
qtyInput(y)
{
  X := inputFirst[1]
  Sleep 50
  OnClick(inputFirst[1],y)
  Sleep 50
  ;数量确定
  OnClick(btnQtyOK[1],btnQtyOK[2])
   
}
;等待回到首页
WaitForModule()
{
  showed := false
  global count := 0
  Loop
  { 
     GetKeyState, state, Shift
    if state = D
      showed := true
    sleep 5
      showed := checkColor(451,926,0xFFFFFF)
    count ++
    if(count >40) ;500ms超时跳出 
    showed := true
  }
  Until showed
}
;等待列表界面加载完成
WaitForShow()
{
  showed := false
  global count := 0
  Loop
  {
    GetKeyState, state, Shift
    if state = D
       showed := true
    sleep 5
    showed := ListShowed()
    count ++
    if(count >100) ;800ms超时跳出 
    showed := true
  }
  Until showed
}
;判断一键申购是否可以点击
ListShowed()
{
  locx :=GetGlobalX(btnStart[1])
  locy :=GetGlobalY(btnStart[2])
  PixelGetColor, color, locx, locy
  str := SubStr(color,7,2)
  MsgBox ListShowed:%locx%,%locy%,%color%
  if str in 4C,4D,4A,49,48,4A,4B
   showed := true
  else
    showed := false
    return  showed
}
; 检查订单页面打开
waitOrderShow()
{
   showed := false
  global count := 0
  Loop
  { 
    GetKeyState, state, Shift
    if state = D
       showed := true
    sleep 5

    locx :=GetGlobalX(orderheader[1])
    locy :=GetGlobalY(orderheader[2])
    showed := checkColor(locx,locy,0xFDFFFD) ;检查为空蓝条标识
    if(showed=false) 
    showed := checkColor(locx,locy,0xFFFFFF) ;检查为空蓝条标识
    count ++
    if(count >100) ;800ms超时跳出 
    showed := true
  }
  Until showed
}

waitForOrder()
{
  isChecked := false
  global count := 0
  Loop
  {
    GetKeyState, state, Shift
    if state = D
       isChecked := true
    OnClick(btnFirst[1],btnFirst[2])
    sleep 5
     locx :=GetGlobalX(btnFirst[1])
    locy :=GetGlobalY(btnFirst[2])
    notChecked := checkColor(locx,locy,0xFFFFFF)  
    if(notChecked=false) 
      notChecked := checkColor(locx,locy,0xFDFFFD)  
    if(notChecked=false) 
      notChecked := checkColor(locx,locy,0xFBFFFF) 
    if(notChecked=false) 
      notChecked := checkColor(locx,locy,0xFDFFFF)
    if(notChecked=false) 
      notChecked := checkColor(locx,locy,0xFCFEFE)
    if(notChecked=false)
      isChecked := true ;如果点击后非白色，则跳出等待
    if(isChecked=false)
    {
      isRed := isStart() ;查找红色标识
        if(isRed=false)
          isChecked := true 
    }
    count ++
    if(count >100) ;超时跳出 
      isChecked := true
  }
  Until isChecked
}
;通过RGB颜色判断是否红色，非红色为已上架 
isStart()
{
  X :=GetGlobalX(tagNull[1])
  Y := GetGlobalY(tagNull[2])
  
  PixelGetColor, color, %X%, %Y%
  str := SubStr(color,3,2)
  if(str>60)
    isStart :=  true
  else
    isStart :=  false
  return  isStart
}

checkColor(X,Y,Targetcolor){
  PixelGetColor, color, %X%, %Y%
 MsgBox %X%,%Y%,%color%,%Targetcolor%
  if (color=Targetcolor)
      isSuccsse:= true
  else 
      isSuccsse:= false
  return isSuccsse
}
login()
{
  islogin := checkColor(216,145,0xFFFFFF)
  if(islogin=true) 
  {
      Send {Click 97, 230}061017
      Send {Click 243, 351} ; 登录
      Sleep 500
      Send {Click 364, 607} ; 登录确认
  }
}
return
OnClick(locationX,locationY)
{
 locx := GetGlobalX(locationX)
 locy := GetGlobalY(locationY)
   Send {Click %locx%, %locy%} 
}
return
GetGlobalX(locationX)
{
 locx := locationX * currWidth / referX+10
  if(locx=0)
    locx=10
    return locx
}
return
GetGlobalY(locationY)
{
 locy := (locationY-titleHeight) * (currHeight-titleHeight) / (referY-titleHeight)+titleHeight+5
  if(locy=0)
    locy=10
    return locy
}
return
#c::

 locx := GetGlobalX(300)
 locy := GetGlobalY(400)
   Send {Click %locx%, %locy%} 
return

#z::

   Send {Click 300, 700} 
;WinGetPos, X, Y, Width, Height, A  ; "A" 表示获取活动窗口的位置.
;MsgBox %Width%,%Height%,%A%
return

#a::
MouseGetPos, MouseX, MouseY
PixelGetColor, color, %MouseX%, %MouseY%
 str := SubStr(color,7,2)
MsgBox location %MouseX%, %MouseY% color %color% , %str%
return

findColor(MouseX,MouseY)
{
  PixelGetColor, color, %MouseX%, %MouseY%
  MsgBox location %MouseX%, %MouseY% color %color%
} 

```