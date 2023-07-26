---
lang: zh-CN
title: Luhui WCS
description: 页面的描述
date: 2023-03-01
cover: /assets/images/luhui.png
category:
  - Logistics
tag:
  - WPF
---
# Luhui WCS


## Introduce

This is a logistics warehouse control system, a logistics warehouse has a transmission belt, sorting machine, barcode scanner, motor, PLC, speed sensor. This system needs to connect all devices through various communication protocols, coordinate control, analyze the information collected by sensors and bar code scanners, and control the sorting machine to separate the route of the parcel. this system track the speed and position of parcel movement using techniques such as threaded wait, locks, and queues to control the flow of parcels to different routes in the exact position and correct order.


![](/assets/images/Sorter.gif)

## Architecture
![](/assets/images/wcsact.png)
### Networking

![](/assets/images/wcsnetsorking.png)
### Software
![](/assets/images/sorter.png)