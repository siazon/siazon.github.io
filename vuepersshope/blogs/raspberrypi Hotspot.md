---
lang: zh-CN
title: Raspberry pi Hotspot
description: 页面的描述
order: 1
category:
  - Tech
tag:
  - Raspberry Pi
---

# Raspberry Pi Hotspot

1. Clone the code and install。

~~~
git clone https://github.com/oblique/create_ap 
cd create_ap 
make install
~~~

2. Install the dependency library

~~~
apt install util-linux procps hostapd iproute2 iw haveged dnsmasq
~~~

3. create WIFI hotspot

~~~
sudo create_ap wlan0 eth1 piwifi hj123456
~~~

4. Power boot

~~~
 sudo nano /etc/create_ap.conf
~~~

Modify SSID=piwifi, PASSPHRASE=hj123456.

Make sure wlan0 and eth1.

~~~
sudo nano /usr/lib/systemd/system/create_ap.service
~~~

Make sure there is the below line in the file.

~~~
ExecStart=/usr/bim/create_ap --config /etc/create_ap.conf
~~~

~~~
sudo systemctl enable create_ap
~~~



<font color=red>PS:</font>

one more thing needs to remember:

wps_supplicant.conf content for connect the WIFI when boot.

~~~
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
ssid="siazonMate"
psk="hj1234567"
priority=1
}
~~~

