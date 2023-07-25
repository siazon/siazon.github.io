---
lang: zh-CN
title: Luhui WCS
description: 页面的描述
---
# Luhui WCS


## Introduce

This is a logistics warehouse control system, a logistics warehouse has a transmission belt, sorting machine, barcode scanner, motor, PLC, speed sensor. This system needs to connect all devices through various communication protocols, coordinate control, analyze the information collected by sensors and bar code scanners, and control the sorting machine to separate the route of the parcel. this system track the speed and position of parcel movement using techniques such as threaded wait, locks, and queues to control the flow of parcels to different routes in the exact position and correct order.


![](/img/Sorter.gif)

## Architecture
![](/img/wcsact.png)
### Networking

![](/img/wcsnetsorking.png)
### Software
![](/img/sorter.png)