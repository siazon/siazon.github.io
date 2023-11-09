import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as n,c as s,e as d,w as l,d as e,b as r}from"./app-7479d48d.js";const o={},c=e(`<h1 id="raspberry-pi-hotspot" tabindex="-1"><a class="header-anchor" href="#raspberry-pi-hotspot" aria-hidden="true">#</a> Raspberry Pi Hotspot</h1><ol><li>Clone the code and install。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/oblique/create_ap 
cd create_ap 
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Install the dependency library</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt install util-linux procps hostapd iproute2 iw haveged dnsmasq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>create WIFI hotspot</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo create_ap wlan0 eth1 piwifi hj123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>Power boot</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> sudo nano /etc/create_ap.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Modify SSID=piwifi, PASSPHRASE=hj123456.</p><p>Make sure wlan0 and eth1.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo nano /usr/lib/systemd/system/create_ap.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Make sure there is the below line in the file.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ExecStart=/usr/bim/create_ap --config /etc/create_ap.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl enable create_ap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),u=e(`<p>one more thing needs to remember:</p><p>wps_supplicant.conf content for connect the WIFI when boot.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
ssid=&quot;siazonMate&quot;
psk=&quot;hj1234567&quot;
priority=1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function p(v,m){const a=i("font");return n(),s("div",null,[c,d(a,{color:"red"},{default:l(()=>[r("PS:")]),_:1}),u])}const x=t(o,[["render",p],["__file","raspberrypi Hotspot.html.vue"]]);export{x as default};
