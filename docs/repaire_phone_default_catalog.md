# Repaire Phone Default Catalog

Purpose: default phone catalog for the repair workflow and inventory catalog.

Target:
- Cover around 70%+ of common Algerian repair-market cases by default.
- Keep the flow smooth and not heavy.
- Let the shop add custom brand/model/problem/part anytime.

Important UX rule:
- Flow should be: Phone → Brand → Model family → Model/generation → exact variant typed manually if needed.
- Do not force RAM/storage/color as separate models.
- RAM, storage, color, IMEI, condition are fields.
- Always show:
  - Search
  - Other brand
  - Other model
  - Add custom brand/model

Data strategy:
- Global default catalog = seed data managed by super admin.
- Store custom catalog = tenant/store-specific additions.
- Default catalog should feel complete, but not impossible to maintain.

---

# 1. Phone Brand List for Algeria

Priority brands:

- Samsung
- Xiaomi
- Redmi
- Poco
- Apple
- Oppo
- Realme
- Infinix
- Tecno
- Huawei
- Honor
- Vivo
- Itel
- Nokia / HMD
- Condor
- Iris
- Stream
- OnePlus
- Google Pixel

Extended brands:

- Motorola
- Sony
- LG
- ZTE
- Meizu
- Lenovo
- Alcatel
- Wiko
- Nothing
- Blackview
- Doogee
- Ulefone
- Cubot
- Oukitel
- TCL
- Hisense
- HTC
- Asus ROG Phone
- Nubia / RedMagic
- Other

---

# 2. Samsung Phone Catalog

## Priority families

- Galaxy A Series
- Galaxy S Series
- Galaxy Note Series
- Galaxy M Series
- Galaxy J Series
- Galaxy Z Fold
- Galaxy Z Flip

## Galaxy A Series

- Galaxy A01
- Galaxy A02
- Galaxy A02s
- Galaxy A03
- Galaxy A03s
- Galaxy A04
- Galaxy A04s
- Galaxy A05
- Galaxy A05s
- Galaxy A06
- Galaxy A07
- Galaxy A10
- Galaxy A10s
- Galaxy A11
- Galaxy A12
- Galaxy A13
- Galaxy A14
- Galaxy A15
- Galaxy A16
- Galaxy A20
- Galaxy A20s
- Galaxy A21s
- Galaxy A22
- Galaxy A23
- Galaxy A24
- Galaxy A25
- Galaxy A30
- Galaxy A30s
- Galaxy A31
- Galaxy A32
- Galaxy A33
- Galaxy A34
- Galaxy A35
- Galaxy A36
- Galaxy A40
- Galaxy A41
- Galaxy A42
- Galaxy A50
- Galaxy A50s
- Galaxy A51
- Galaxy A52
- Galaxy A52s
- Galaxy A53
- Galaxy A54
- Galaxy A55
- Galaxy A56
- Galaxy A60
- Galaxy A70
- Galaxy A70s
- Galaxy A71
- Galaxy A72
- Galaxy A73
- Galaxy A80
- Galaxy A90
- Other Galaxy A

## Galaxy S Series

- Galaxy S6
- Galaxy S6 Edge
- Galaxy S7
- Galaxy S7 Edge
- Galaxy S8
- Galaxy S8 Plus
- Galaxy S9
- Galaxy S9 Plus
- Galaxy S10e
- Galaxy S10
- Galaxy S10 Plus
- Galaxy S10 5G
- Galaxy S20 FE
- Galaxy S20
- Galaxy S20 Plus
- Galaxy S20 Ultra
- Galaxy S21 FE
- Galaxy S21
- Galaxy S21 Plus
- Galaxy S21 Ultra
- Galaxy S22
- Galaxy S22 Plus
- Galaxy S22 Ultra
- Galaxy S23 FE
- Galaxy S23
- Galaxy S23 Plus
- Galaxy S23 Ultra
- Galaxy S24 FE
- Galaxy S24
- Galaxy S24 Plus
- Galaxy S24 Ultra
- Galaxy S25
- Galaxy S25 Plus
- Galaxy S25 Ultra
- Other Galaxy S

## Galaxy Note Series

- Galaxy Note 5
- Galaxy Note 8
- Galaxy Note 9
- Galaxy Note 10
- Galaxy Note 10 Plus
- Galaxy Note 10 Lite
- Galaxy Note 20
- Galaxy Note 20 Ultra
- Other Galaxy Note

## Galaxy M Series

- Galaxy M01
- Galaxy M02
- Galaxy M10
- Galaxy M11
- Galaxy M12
- Galaxy M13
- Galaxy M14
- Galaxy M15
- Galaxy M20
- Galaxy M21
- Galaxy M22
- Galaxy M23
- Galaxy M30
- Galaxy M30s
- Galaxy M31
- Galaxy M31s
- Galaxy M32
- Galaxy M33
- Galaxy M34
- Galaxy M35
- Galaxy M40
- Galaxy M51
- Galaxy M52
- Galaxy M53
- Galaxy M54
- Galaxy M55
- Other Galaxy M

## Galaxy J Series

- Galaxy J1
- Galaxy J2
- Galaxy J2 Prime
- Galaxy J3
- Galaxy J4
- Galaxy J4 Plus
- Galaxy J5
- Galaxy J5 Prime
- Galaxy J6
- Galaxy J6 Plus
- Galaxy J7
- Galaxy J7 Prime
- Galaxy J7 Pro
- Galaxy J8
- Other Galaxy J

## Galaxy Z Series

- Galaxy Z Fold
- Galaxy Z Fold2
- Galaxy Z Fold3
- Galaxy Z Fold4
- Galaxy Z Fold5
- Galaxy Z Fold6
- Galaxy Z Fold7
- Galaxy Z Flip
- Galaxy Z Flip3
- Galaxy Z Flip4
- Galaxy Z Flip5
- Galaxy Z Flip6
- Other Galaxy Z

## Legacy / More Samsung

- Galaxy Grand
- Galaxy Grand Prime
- Galaxy Core
- Galaxy Core Prime
- Galaxy Ace
- Galaxy Trend
- Galaxy Young
- Galaxy Star
- Galaxy Alpha
- Galaxy C Series
- Galaxy E Series
- Other Samsung

---

# 3. Apple iPhone Catalog

## Priority families

- iPhone 6 / 7 / 8
- iPhone X / XR / XS
- iPhone 11
- iPhone 12
- iPhone 13
- iPhone 14
- iPhone 15
- iPhone 16
- iPhone 17
- iPhone SE

## iPhone Models

- iPhone 5
- iPhone 5c
- iPhone 5s
- iPhone SE 1st gen
- iPhone 6
- iPhone 6 Plus
- iPhone 6s
- iPhone 6s Plus
- iPhone 7
- iPhone 7 Plus
- iPhone 8
- iPhone 8 Plus
- iPhone X
- iPhone XR
- iPhone XS
- iPhone XS Max
- iPhone 11
- iPhone 11 Pro
- iPhone 11 Pro Max
- iPhone SE 2nd gen
- iPhone 12 mini
- iPhone 12
- iPhone 12 Pro
- iPhone 12 Pro Max
- iPhone 13 mini
- iPhone 13
- iPhone 13 Pro
- iPhone 13 Pro Max
- iPhone SE 3rd gen
- iPhone 14
- iPhone 14 Plus
- iPhone 14 Pro
- iPhone 14 Pro Max
- iPhone 15
- iPhone 15 Plus
- iPhone 15 Pro
- iPhone 15 Pro Max
- iPhone 16
- iPhone 16 Plus
- iPhone 16 Pro
- iPhone 16 Pro Max
- iPhone 16e
- iPhone 17
- iPhone 17 Air
- iPhone 17 Pro
- iPhone 17 Pro Max
- Other iPhone

---

# 4. Xiaomi / Mi Phone Catalog

Note:
- Xiaomi, Redmi, and Poco should be searchable separately.
- They can share compatibility logic when parts overlap.
- Use exact model text field for regional suffixes.

## Xiaomi / Mi Series

- Mi 8
- Mi 8 Lite
- Mi 9
- Mi 9 Lite
- Mi 9T
- Mi 9T Pro
- Mi 10
- Mi 10 Lite
- Mi 10T
- Mi 10T Lite
- Mi 10T Pro
- Mi 11
- Mi 11 Lite
- Mi 11 Lite 5G NE
- Mi 11T
- Mi 11T Pro
- Mi 11 Ultra
- Xiaomi 12
- Xiaomi 12 Lite
- Xiaomi 12T
- Xiaomi 12T Pro
- Xiaomi 12 Pro
- Xiaomi 13
- Xiaomi 13 Lite
- Xiaomi 13T
- Xiaomi 13T Pro
- Xiaomi 13 Pro
- Xiaomi 13 Ultra
- Xiaomi 14
- Xiaomi 14T
- Xiaomi 14T Pro
- Xiaomi 14 Pro
- Xiaomi 14 Ultra
- Xiaomi 15
- Xiaomi 15 Pro
- Xiaomi 15 Ultra
- Other Xiaomi / Mi

## Xiaomi Note / Max / Mix

- Mi Note 10
- Mi Note 10 Lite
- Mi Max
- Mi Max 2
- Mi Max 3
- Mi Mix
- Mi Mix 2
- Mi Mix 2S
- Mi Mix 3
- Mix 4
- Mix Fold
- Mix Fold 2
- Mix Fold 3
- Mix Fold 4
- Other Xiaomi Mix/Note/Max

---

# 5. Redmi Phone Catalog

## Redmi Number Series

- Redmi 7
- Redmi 7A
- Redmi 8
- Redmi 8A
- Redmi 9
- Redmi 9A
- Redmi 9AT
- Redmi 9C
- Redmi 9T
- Redmi 10
- Redmi 10A
- Redmi 10C
- Redmi 2022
- Redmi 11 Prime
- Redmi 12
- Redmi 12C
- Redmi 13
- Redmi 13C
- Redmi 14C
- Redmi 15
- Redmi 15C
- Other Redmi Number Series

## Redmi Note Series

- Redmi Note 7
- Redmi Note 7 Pro
- Redmi Note 8
- Redmi Note 8 Pro
- Redmi Note 8T
- Redmi Note 9
- Redmi Note 9S
- Redmi Note 9 Pro
- Redmi Note 10
- Redmi Note 10S
- Redmi Note 10 Pro
- Redmi Note 11
- Redmi Note 11S
- Redmi Note 11 Pro
- Redmi Note 11 Pro Plus
- Redmi Note 12
- Redmi Note 12S
- Redmi Note 12 Pro
- Redmi Note 12 Pro Plus
- Redmi Note 13
- Redmi Note 13 Pro
- Redmi Note 13 Pro Plus
- Redmi Note 14
- Redmi Note 14 Pro
- Redmi Note 14 Pro Plus
- Redmi Note 15
- Redmi Note 15 Pro
- Redmi Note 15 Pro Plus
- Other Redmi Note

## Redmi K Series

- Redmi K20
- Redmi K20 Pro
- Redmi K30
- Redmi K30 Pro
- Redmi K40
- Redmi K40 Gaming
- Redmi K50
- Redmi K50 Gaming
- Redmi K60
- Redmi K70
- Redmi K80
- Other Redmi K

---

# 6. Poco Phone Catalog

## Poco C Series

- Poco C3
- Poco C31
- Poco C40
- Poco C50
- Poco C51
- Poco C55
- Poco C61
- Poco C65
- Poco C75
- Other Poco C

## Poco M Series

- Poco M2
- Poco M2 Pro
- Poco M3
- Poco M3 Pro
- Poco M4
- Poco M4 Pro
- Poco M5
- Poco M5s
- Poco M6
- Poco M6 Pro
- Poco M7
- Poco M7 Pro
- Other Poco M

## Poco X Series

- Poco X2
- Poco X3
- Poco X3 NFC
- Poco X3 Pro
- Poco X4 Pro
- Poco X5
- Poco X5 Pro
- Poco X6
- Poco X6 Pro
- Poco X7
- Poco X7 Pro
- Other Poco X

## Poco F Series

- Poco F1
- Poco F2 Pro
- Poco F3
- Poco F4
- Poco F4 GT
- Poco F5
- Poco F5 Pro
- Poco F6
- Poco F6 Pro
- Poco F7
- Poco F7 Pro
- Other Poco F

---

# 7. Oppo Phone Catalog

## Priority families

- Oppo A Series
- Oppo Reno Series
- Oppo Find Series
- Oppo F Series

## Oppo A Series

- Oppo A1k
- Oppo A3
- Oppo A3s
- Oppo A5
- Oppo A5s
- Oppo A5 2020
- Oppo A7
- Oppo A9
- Oppo A9 2020
- Oppo A12
- Oppo A15
- Oppo A15s
- Oppo A16
- Oppo A16k
- Oppo A17
- Oppo A17k
- Oppo A18
- Oppo A31
- Oppo A32
- Oppo A33
- Oppo A35
- Oppo A36
- Oppo A38
- Oppo A40
- Oppo A52
- Oppo A53
- Oppo A54
- Oppo A55
- Oppo A57
- Oppo A58
- Oppo A60
- Oppo A73
- Oppo A74
- Oppo A76
- Oppo A77
- Oppo A78
- Oppo A79
- Oppo A91
- Oppo A92
- Oppo A93
- Oppo A94
- Oppo A95
- Oppo A96
- Oppo A97
- Oppo A98
- Other Oppo A

## Oppo Reno Series

- Oppo Reno
- Oppo Reno 2
- Oppo Reno 2F
- Oppo Reno 3
- Oppo Reno 3 Pro
- Oppo Reno 4
- Oppo Reno 4 Pro
- Oppo Reno 5
- Oppo Reno 5 Pro
- Oppo Reno 6
- Oppo Reno 6 Pro
- Oppo Reno 7
- Oppo Reno 7 Pro
- Oppo Reno 8
- Oppo Reno 8 Pro
- Oppo Reno 8T
- Oppo Reno 10
- Oppo Reno 10 Pro
- Oppo Reno 11
- Oppo Reno 11 Pro
- Oppo Reno 12
- Oppo Reno 12 Pro
- Oppo Reno 13
- Oppo Reno 13 Pro
- Other Oppo Reno

## Oppo Find Series

- Oppo Find X
- Oppo Find X2
- Oppo Find X2 Pro
- Oppo Find X3
- Oppo Find X3 Pro
- Oppo Find X5
- Oppo Find X5 Pro
- Oppo Find X6
- Oppo Find X6 Pro
- Oppo Find X7
- Oppo Find X7 Ultra
- Oppo Find N
- Oppo Find N2
- Oppo Find N3
- Oppo Find N5
- Other Oppo Find

## Oppo F Series

- Oppo F1
- Oppo F1s
- Oppo F3
- Oppo F5
- Oppo F7
- Oppo F9
- Oppo F11
- Oppo F11 Pro
- Oppo F15
- Oppo F17
- Oppo F19
- Oppo F19 Pro
- Oppo F21 Pro
- Oppo F23
- Oppo F25 Pro
- Oppo F27
- Other Oppo F

---

# 8. Realme Phone Catalog

## Realme C Series

- Realme C2
- Realme C3
- Realme C11
- Realme C12
- Realme C15
- Realme C17
- Realme C20
- Realme C21
- Realme C25
- Realme C25s
- Realme C30
- Realme C30s
- Realme C31
- Realme C33
- Realme C35
- Realme C51
- Realme C53
- Realme C55
- Realme C61
- Realme C63
- Realme C65
- Realme C67
- Realme C75
- Realme C75x
- Other Realme C

## Realme Number Series

- Realme 3
- Realme 3 Pro
- Realme 5
- Realme 5i
- Realme 5 Pro
- Realme 6
- Realme 6i
- Realme 6 Pro
- Realme 7
- Realme 7i
- Realme 7 Pro
- Realme 8
- Realme 8i
- Realme 8 Pro
- Realme 9
- Realme 9i
- Realme 9 Pro
- Realme 9 Pro Plus
- Realme 10
- Realme 10 Pro
- Realme 10 Pro Plus
- Realme 11
- Realme 11 Pro
- Realme 11 Pro Plus
- Realme 12
- Realme 12x
- Realme 12 Pro
- Realme 12 Pro Plus
- Realme 13
- Realme 13 Pro
- Realme 14
- Realme 14 Pro
- Other Realme Number

## Realme GT / Narzo / X

- Realme GT
- Realme GT Neo
- Realme GT Master
- Realme GT2
- Realme GT3
- Realme GT5
- Realme GT6
- Realme Narzo 20
- Realme Narzo 30
- Realme Narzo 50
- Realme Narzo 60
- Realme Narzo 70
- Realme X
- Realme X2
- Realme X2 Pro
- Realme X3
- Realme X7
- Other Realme GT/Narzo/X

---

# 9. Infinix Phone Catalog

## Infinix Smart Series

- Infinix Smart 3
- Infinix Smart 4
- Infinix Smart 5
- Infinix Smart 6
- Infinix Smart 7
- Infinix Smart 8
- Infinix Smart 9
- Other Infinix Smart

## Infinix Hot Series

- Infinix Hot 8
- Infinix Hot 9
- Infinix Hot 10
- Infinix Hot 10 Play
- Infinix Hot 11
- Infinix Hot 11 Play
- Infinix Hot 12
- Infinix Hot 12 Play
- Infinix Hot 20
- Infinix Hot 20i
- Infinix Hot 30
- Infinix Hot 30i
- Infinix Hot 40
- Infinix Hot 40i
- Infinix Hot 50
- Other Infinix Hot

## Infinix Note Series

- Infinix Note 7
- Infinix Note 8
- Infinix Note 10
- Infinix Note 11
- Infinix Note 12
- Infinix Note 12 Pro
- Infinix Note 30
- Infinix Note 30 Pro
- Infinix Note 40
- Infinix Note 40 Pro
- Infinix Note 50
- Other Infinix Note

## Infinix Zero / GT

- Infinix Zero 8
- Infinix Zero X
- Infinix Zero 5G
- Infinix Zero 20
- Infinix Zero 30
- Infinix Zero 40
- Infinix GT 10 Pro
- Infinix GT 20 Pro
- Other Infinix Zero/GT

---

# 10. Tecno Phone Catalog

## Tecno Spark Series

- Tecno Spark 5
- Tecno Spark 6
- Tecno Spark 7
- Tecno Spark 8
- Tecno Spark 8C
- Tecno Spark 9
- Tecno Spark 10
- Tecno Spark 10C
- Tecno Spark 20
- Tecno Spark 20C
- Tecno Spark 20 Pro
- Tecno Spark 30
- Tecno Spark 30C
- Tecno Spark Go
- Tecno Spark Go 2024
- Tecno Spark Go 1
- Other Tecno Spark

## Tecno Camon Series

- Tecno Camon 11
- Tecno Camon 12
- Tecno Camon 15
- Tecno Camon 16
- Tecno Camon 17
- Tecno Camon 18
- Tecno Camon 19
- Tecno Camon 20
- Tecno Camon 20 Pro
- Tecno Camon 30
- Tecno Camon 30 Pro
- Tecno Camon 40
- Tecno Camon 40 Pro
- Other Tecno Camon

## Tecno Pop / Pova / Phantom

- Tecno Pop 2
- Tecno Pop 3
- Tecno Pop 4
- Tecno Pop 5
- Tecno Pop 6
- Tecno Pop 7
- Tecno Pop 8
- Tecno Pop 9
- Tecno Pova
- Tecno Pova 2
- Tecno Pova 3
- Tecno Pova 4
- Tecno Pova 5
- Tecno Pova 6
- Tecno Phantom X
- Tecno Phantom V Fold
- Tecno Phantom V Flip
- Other Tecno

---

# 11. Huawei Phone Catalog

## Huawei Y Series

- Huawei Y3
- Huawei Y5
- Huawei Y5 Prime
- Huawei Y6
- Huawei Y6 Prime
- Huawei Y6p
- Huawei Y7
- Huawei Y7 Prime
- Huawei Y7p
- Huawei Y8p
- Huawei Y9
- Huawei Y9 Prime
- Huawei Y9s
- Other Huawei Y

## Huawei P Series

- Huawei P8
- Huawei P9
- Huawei P10
- Huawei P10 Lite
- Huawei P20
- Huawei P20 Lite
- Huawei P20 Pro
- Huawei P30
- Huawei P30 Lite
- Huawei P30 Pro
- Huawei P40
- Huawei P40 Lite
- Huawei P40 Pro
- Huawei P50
- Huawei P50 Pro
- Huawei P60
- Huawei P60 Pro
- Huawei Pura 70
- Other Huawei P/Pura

## Huawei Mate Series

- Huawei Mate 8
- Huawei Mate 9
- Huawei Mate 10
- Huawei Mate 10 Lite
- Huawei Mate 20
- Huawei Mate 20 Lite
- Huawei Mate 20 Pro
- Huawei Mate 30
- Huawei Mate 30 Pro
- Huawei Mate 40
- Huawei Mate 40 Pro
- Huawei Mate 50
- Huawei Mate 50 Pro
- Huawei Mate 60
- Huawei Mate 60 Pro
- Other Huawei Mate

## Huawei Nova Series

- Huawei Nova 2
- Huawei Nova 3
- Huawei Nova 3i
- Huawei Nova 4
- Huawei Nova 5T
- Huawei Nova 7i
- Huawei Nova 8
- Huawei Nova 8i
- Huawei Nova 9
- Huawei Nova 9 SE
- Huawei Nova 10
- Huawei Nova 10 SE
- Huawei Nova 11
- Huawei Nova 11i
- Huawei Nova 12
- Huawei Nova 12i
- Other Huawei Nova

---

# 12. Honor Phone Catalog

## Honor Number Series

- Honor 7
- Honor 8
- Honor 8X
- Honor 9
- Honor 9X
- Honor 10
- Honor 10 Lite
- Honor 20
- Honor 20 Lite
- Honor 20 Pro
- Honor 30
- Honor 30 Lite
- Honor 50
- Honor 50 Lite
- Honor 70
- Honor 70 Lite
- Honor 90
- Honor 90 Lite
- Honor 100
- Honor 100 Pro
- Honor 200
- Honor 200 Lite
- Honor 200 Pro
- Other Honor Number

## Honor X Series

- Honor X5
- Honor X6
- Honor X6a
- Honor X7
- Honor X7a
- Honor X7b
- Honor X8
- Honor X8a
- Honor X8b
- Honor X9
- Honor X9a
- Honor X9b
- Other Honor X

## Honor Magic / Play

- Honor Magic 4
- Honor Magic 4 Pro
- Honor Magic 5
- Honor Magic 5 Pro
- Honor Magic 6
- Honor Magic 6 Pro
- Honor Magic 7
- Honor Magic 7 Pro
- Honor Magic V
- Honor Magic V2
- Honor Magic V3
- Honor Play
- Honor Play 3
- Honor Play 4
- Honor Play 5
- Honor Play 6
- Honor Play 7
- Other Honor Magic/Play

---

# 13. Vivo Phone Catalog

## Vivo Y Series

- Vivo Y01
- Vivo Y02
- Vivo Y03
- Vivo Y11
- Vivo Y12
- Vivo Y15
- Vivo Y16
- Vivo Y17
- Vivo Y19
- Vivo Y20
- Vivo Y21
- Vivo Y22
- Vivo Y27
- Vivo Y28
- Vivo Y30
- Vivo Y31
- Vivo Y33
- Vivo Y35
- Vivo Y36
- Vivo Y51
- Vivo Y52
- Vivo Y53
- Vivo Y55
- Vivo Y73
- Vivo Y75
- Vivo Y76
- Other Vivo Y

## Vivo V Series

- Vivo V9
- Vivo V11
- Vivo V15
- Vivo V17
- Vivo V19
- Vivo V20
- Vivo V21
- Vivo V23
- Vivo V25
- Vivo V27
- Vivo V29
- Vivo V30
- Vivo V40
- Vivo V50
- Other Vivo V

## Vivo X Series

- Vivo X50
- Vivo X50 Pro
- Vivo X60
- Vivo X60 Pro
- Vivo X70
- Vivo X70 Pro
- Vivo X80
- Vivo X80 Pro
- Vivo X90
- Vivo X90 Pro
- Vivo X100
- Vivo X100 Pro
- Vivo X200
- Vivo X200 Pro
- Other Vivo X

## Vivo S / T / iQOO

- Vivo S1
- Vivo S1 Pro
- Vivo T1
- Vivo T2
- Vivo T3
- iQOO Z Series
- iQOO Neo Series
- iQOO Number Series
- Other Vivo/iQOO

---

# 14. Itel Phone Catalog

## Itel A Series

- Itel A14
- Itel A16
- Itel A23
- Itel A25
- Itel A26
- Itel A27
- Itel A48
- Itel A49
- Itel A50
- Itel A60
- Itel A70
- Other Itel A

## Itel P / S / Vision

- Itel P17
- Itel P37
- Itel P40
- Itel P55
- Itel P65
- Itel S15
- Itel S16
- Itel S17
- Itel S23
- Itel S24
- Itel Vision 1
- Itel Vision 2
- Itel Vision 3
- Other Itel

---

# 15. Nokia / HMD Phone Catalog

## Nokia Android

- Nokia 1
- Nokia 1 Plus
- Nokia 1.3
- Nokia 1.4
- Nokia 2
- Nokia 2.1
- Nokia 2.2
- Nokia 2.3
- Nokia 2.4
- Nokia 3
- Nokia 3.1
- Nokia 3.2
- Nokia 3.4
- Nokia 4.2
- Nokia 5
- Nokia 5.1
- Nokia 5.3
- Nokia 5.4
- Nokia 6
- Nokia 6.1
- Nokia 6.2
- Nokia 7 Plus
- Nokia 7.1
- Nokia 7.2
- Nokia 8
- Nokia 8.1
- Nokia 8.3
- Nokia C Series
- Nokia G Series
- Nokia X Series
- Other Nokia Android

## Nokia Feature / Classic

- Nokia 105
- Nokia 106
- Nokia 110
- Nokia 125
- Nokia 130
- Nokia 150
- Nokia 216
- Nokia 225
- Nokia 230
- Nokia 3310
- Nokia 5310
- Nokia 6300
- Nokia 8000
- Other Nokia Feature Phone

## HMD

- HMD Pulse
- HMD Pulse Plus
- HMD Pulse Pro
- HMD Skyline
- Other HMD

---

# 16. Condor Phone Catalog

Note:
Condor is important in Algeria. Keep custom model entry easy because exact model names vary locally.

- Condor Allure
- Condor Plume
- Condor Griffe
- Condor M
- Condor P
- Condor G
- Condor A
- Condor C
- Condor T
- Condor Infinity
- Other Condor

Common Condor examples:
- Allure A8
- Allure A55
- Allure M1
- Allure M2
- Plume P6
- Plume P7
- Plume P8
- Plume L1
- Griffe T
- Griffe G
- Other Condor exact model

---

# 17. Iris Phone Catalog

- Iris Vox
- Iris Next
- Iris IS
- Iris G
- Iris V
- Iris S
- Iris N
- Other Iris

Common Iris examples:
- Iris Vox 4s
- Iris Vox 4G
- Iris Next G
- Iris IS Series
- Other Iris exact model

---

# 18. Stream Phone Catalog

- Stream System
- Stream B
- Stream S
- Stream M
- Stream HT
- Stream BM
- Stream GO
- Other Stream

Common Stream examples:
- Stream B1
- Stream B2
- Stream B3
- Stream B4
- Stream B5
- Stream S1
- Stream S2
- Stream HT16
- Other Stream exact model

---

# 19. OnePlus Phone Catalog

## OnePlus Number Series

- OnePlus One
- OnePlus 2
- OnePlus 3
- OnePlus 3T
- OnePlus 5
- OnePlus 5T
- OnePlus 6
- OnePlus 6T
- OnePlus 7
- OnePlus 7 Pro
- OnePlus 7T
- OnePlus 7T Pro
- OnePlus 8
- OnePlus 8 Pro
- OnePlus 8T
- OnePlus 9
- OnePlus 9 Pro
- OnePlus 9RT
- OnePlus 10 Pro
- OnePlus 10T
- OnePlus 11
- OnePlus 12
- OnePlus 13
- Other OnePlus Number

## OnePlus Nord Series

- OnePlus Nord
- OnePlus Nord 2
- OnePlus Nord 2T
- OnePlus Nord 3
- OnePlus Nord 4
- OnePlus Nord CE
- OnePlus Nord CE 2
- OnePlus Nord CE 3
- OnePlus Nord CE 4
- OnePlus Nord N10
- OnePlus Nord N20
- OnePlus Nord N30
- OnePlus Nord N100
- OnePlus Nord N200
- OnePlus Nord N300
- Other OnePlus Nord

---

# 20. Google Pixel Phone Catalog

- Pixel
- Pixel XL
- Pixel 2
- Pixel 2 XL
- Pixel 3
- Pixel 3 XL
- Pixel 3a
- Pixel 3a XL
- Pixel 4
- Pixel 4 XL
- Pixel 4a
- Pixel 4a 5G
- Pixel 5
- Pixel 5a
- Pixel 6
- Pixel 6 Pro
- Pixel 6a
- Pixel 7
- Pixel 7 Pro
- Pixel 7a
- Pixel 8
- Pixel 8 Pro
- Pixel 8a
- Pixel 9
- Pixel 9 Pro
- Pixel 9 Pro XL
- Pixel 9a
- Pixel Fold
- Pixel 9 Pro Fold
- Other Pixel

---

# 21. Motorola Phone Catalog

- Moto E Series
  - Moto E4
  - Moto E5
  - Moto E6
  - Moto E7
  - Moto E13
  - Moto E20
  - Moto E22
  - Moto E30
  - Moto E40
- Moto G Series
  - Moto G5
  - Moto G6
  - Moto G7
  - Moto G8
  - Moto G9
  - Moto G10
  - Moto G20
  - Moto G30
  - Moto G50
  - Moto G60
  - Moto G70
  - Moto G84
- Moto Edge Series
  - Edge
  - Edge 20
  - Edge 30
  - Edge 40
  - Edge 50
  - Edge 60
  - Edge Pro
- Moto One Series
- Razr
- Other Motorola

---

# 22. Sony Phone Catalog

- Xperia Z Series
- Xperia X Series
- Xperia XA Series
- Xperia L Series
- Xperia 1 Series
- Xperia 5 Series
- Xperia 10 Series
- Xperia Pro
- Other Sony Xperia

Common examples:
- Xperia Z3
- Xperia Z5
- Xperia XA1
- Xperia XA2
- Xperia XZ
- Xperia XZ1
- Xperia XZ2
- Xperia 1 II
- Xperia 1 III
- Xperia 1 IV
- Xperia 1 V
- Xperia 5
- Xperia 10
- Other Sony exact model

---

# 23. LG Phone Catalog

- LG G Series
  - LG G2
  - LG G3
  - LG G4
  - LG G5
  - LG G6
  - LG G7
  - LG G8
- LG V Series
  - LG V10
  - LG V20
  - LG V30
  - LG V40
  - LG V50
  - LG V60
- LG K Series
- LG Q Series
- LG Stylo
- LG Velvet
- LG Wing
- Other LG

---

# 24. ZTE Phone Catalog

- ZTE Blade
- ZTE Blade A Series
- ZTE Blade V Series
- ZTE Axon
- ZTE Nubia
- ZTE RedMagic
- Other ZTE

---

# 25. Meizu Phone Catalog

- Meizu M Series
- Meizu Note Series
- Meizu Pro Series
- Meizu MX Series
- Meizu 15
- Meizu 16
- Meizu 17
- Meizu 18
- Meizu 20
- Other Meizu

---

# 26. Lenovo Phone Catalog

- Lenovo A Series
- Lenovo K Series
- Lenovo P Series
- Lenovo S Series
- Lenovo Vibe
- Lenovo Z Series
- Lenovo Legion Phone
- Motorola models should usually be under Motorola
- Other Lenovo

---

# 27. Alcatel Phone Catalog

- Alcatel OneTouch
- Alcatel Pixi
- Alcatel Pop
- Alcatel Idol
- Alcatel 1
- Alcatel 3
- Alcatel 5
- Other Alcatel

---

# 28. Wiko Phone Catalog

- Wiko Y Series
- Wiko View
- Wiko View2
- Wiko View3
- Wiko Harry
- Wiko Jerry
- Wiko Sunny
- Wiko Lenny
- Wiko Robby
- Wiko Ufeel
- Other Wiko

---

# 29. Nothing Phone Catalog

- Nothing Phone 1
- Nothing Phone 2
- Nothing Phone 2a
- Nothing Phone 2a Plus
- Nothing Phone 3
- Other Nothing

---

# 30. Rugged / Budget Brands

## Blackview

- Blackview A Series
- Blackview BV Series
- Blackview Oscal
- Blackview Shark
- Other Blackview

## Doogee

- Doogee X Series
- Doogee S Series
- Doogee N Series
- Doogee V Series
- Other Doogee

## Ulefone

- Ulefone Armor
- Ulefone Note
- Ulefone Power
- Other Ulefone

## Cubot

- Cubot Note
- Cubot KingKong
- Cubot X
- Other Cubot

## Oukitel

- Oukitel C Series
- Oukitel K Series
- Oukitel WP Series
- Other Oukitel

---

# 31. Other Brands

- TCL
- Hisense
- HTC
- Asus ROG Phone
- Nubia / RedMagic
- Other brand

---

# 32. Common Phone Problems

Use after brand/model selection.

## Screen / display

- Broken screen
- Touch not working
- No display
- Lines on screen
- Black screen
- White screen
- Flickering screen
- Brightness problem
- Backlight problem
- Screen glass only broken
- LCD/OLED damaged
- Green line issue
- Burn-in issue

## Battery / power

- Battery drains fast
- Battery swollen
- Phone does not power on
- Random shutdown
- Restart loop
- Overheating
- Power button issue
- Not charging
- Slow charging
- Charging stops
- Battery percentage jumps

## Charging / connector

- Charging port damaged
- Cable not detected
- Loose charging port
- USB-C issue
- Lightning port issue
- Micro-USB issue
- Charging IC issue
- Moisture detected
- Wireless charging issue

## Camera

- Rear camera not working
- Front camera not working
- Camera blurry
- Camera glass broken
- Flash not working
- Camera app black screen
- Focus problem

## Sound / microphone

- Speaker not working
- Ear speaker not working
- Low sound
- Microphone not working
- Other person cannot hear
- Headphone jack issue
- Bluetooth audio issue

## Network / SIM

- No SIM detected
- Network not available
- Weak signal
- No service
- SIM reader damaged
- IMEI issue
- Wi-Fi not working
- Bluetooth not working
- GPS not working
- NFC not working

## Buttons / sensors

- Power button not working
- Volume button not working
- Home button not working
- Fingerprint not working
- Face ID not working
- Proximity sensor issue
- Light sensor issue
- Vibration not working

## Software

- Locked phone
- Forgotten password
- Google FRP lock
- iCloud lock
- Bootloop
- Stuck on logo
- Software update problem
- Virus/malware cleanup
- Data recovery
- Data transfer
- Factory reset
- Flash firmware
- App problem
- Storage full

## Physical / liquid damage

- Back glass broken
- Frame bent
- Housing damaged
- Water damage
- Liquid damage
- Camera lens broken
- Screws missing
- Internal connector damaged

---

# 33. Common Phone Parts

## Display parts

- Screen assembly
- LCD screen
- OLED screen
- AMOLED screen
- Touch digitizer
- Glass only
- Screen frame
- Backlight
- Screen adhesive
- Camera lens protector

## Battery / power parts

- Battery
- Battery adhesive
- Power button flex
- Charging IC
- Power IC
- Wireless charging coil

## Charging parts

- Charging port board
- USB-C port
- Lightning port
- Micro-USB port
- Charging flex
- Dock connector
- SIM/charging board

## Camera parts

- Rear camera
- Front camera
- Camera glass
- Flash module
- Camera flex

## Audio parts

- Loud speaker
- Ear speaker
- Microphone
- Audio jack
- Speaker mesh
- Audio flex

## Network / SIM parts

- SIM tray
- SIM reader
- Antenna cable
- Wi-Fi antenna
- Network antenna
- NFC flex

## Buttons / sensors

- Volume button flex
- Power button flex
- Home button
- Fingerprint sensor
- Face ID module
- Proximity sensor
- Light sensor
- Vibration motor

## Body / housing

- Back cover
- Back glass
- Middle frame
- Housing frame
- Camera frame
- Screws
- Waterproof seal
- Adhesive sticker

## Board / internal

- Motherboard
- Daughterboard
- Flex cable
- Connector
- IC component
- Memory chip
- CPU repair
- Baseband repair

---

# 34. Phone Repair Flow

Recommended flow:

1. Select device family: Phone
2. Select brand
3. Select model family
4. Select model/generation
5. Enter exact model/reference manually if needed
6. Select problem
7. Suggested parts appear
8. Add inventory part or manual part
9. Add condition photos/checklist if needed
10. Create repair ticket

Fallbacks:

- Other brand
- Other model
- Add custom brand
- Add custom family
- Add custom model
- Add manual problem
- Add manual part

---

# 35. Phone Device Fields

Required for repair:

- Brand
- Model or manual device name
- Problem
- Customer phone number

Optional:

- Customer name
- IMEI 1
- IMEI 2
- Serial number
- Color
- Storage
- RAM
- SIM status
- Network lock status
- Passcode / pattern note
- Condition notes
- Photos

For inventory device sale:

- Brand
- Model
- Category: New device / Used device / Caba device
- Condition: excellent / good / fair / broken
- Cost price
- Selling price
- Status: available / reserved / sold / returned / damaged
- IMEI/serial optional; internal code generated if empty

---

# 36. Compatibility Rules

Part compatibility can link to:

- Device family: Phone
- Brand
- Model family
- Exact model/generation
- Optional tags

Examples:

- iPhone 11 screen → Apple → iPhone 11
- Samsung A12 charging port → Samsung → Galaxy A → A12
- Redmi Note 10 battery → Redmi → Note Series → Note 10
- Universal USB-C charging port board → Phone → USB-C tag

---

# 37. Suggested UX Rules

To keep the system fast:

- Show priority brands first.
- Group brands alphabetically after priority brands.
- Use search everywhere.
- Show model family before exact model.
- Allow exact model text field.
- Let technician skip exact model if unknown.
- Let technician add custom model during ticket creation.
- Keep custom additions store-specific.
- Do not block ticket creation if model is not in catalog.

Priority brand order:

1. Samsung
2. Xiaomi / Redmi / Poco
3. Apple
4. Oppo
5. Realme
6. Infinix
7. Tecno
8. Huawei
9. Honor
10. Vivo
11. Itel
12. Nokia / HMD
13. Condor
14. Iris
15. Stream
16. OnePlus
17. Google Pixel
18. Other

---

# 38. Data Model Notes

Recommended tables:

- device_families
- device_brands
- device_model_families
- device_models
- device_model_aliases
- device_variants
- repair_problem_categories
- repair_problems
- part_categories
- parts
- part_compatibility
- store_custom_catalog_entries

Aliases are important.

Examples:

- Redmi Note 13 Pro Plus = Redmi Note 13 Pro+
- Samsung A16 = Galaxy A16
- iPhone 15 Pro Max = Apple iPhone 15 Pro Max
- Poco X7 Pro = POCO X7 PRO

Do not duplicate storage/RAM as different models:
- Model: Redmi Note 13 Pro
- Variant fields: RAM, storage, color
