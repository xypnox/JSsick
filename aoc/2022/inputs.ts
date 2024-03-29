// Tests:
export const day8Test = `30373
25512
65332
33549
35390`;

export const day7Test = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

export const day6Test = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;
export const day6Tests = [
  `mjqjpqmgbljsphdztnvjfqwrcgsmlb`,
  `bvwbjplbgvbhsrlpgdmjqwftvncz`,
  `nppdvjthqldpwncqszvftbrmjlhg`,
  `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`,
  `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`,
];

export const day5Test = `
    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

export const day4Test = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

export const day3Test = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

// Actual inputs:
//
export const day8Input = `213301311230020143114320444110403320013225525311631030063110421431345121304222223004301412232100001
032203111100043323010213335301511304130605406233153314443635022154110215552041255340234040130323222
211033104233224304235521203100252423434120553365402362266533500152442121543412024410024400242202302
013233443223404100042450150455321226633161540105245332600255253210530355343333525022032244210410030
100023412423313250410335224414340304541343205513226532163144253316101245551432014201003142341223120
232241013411335302431133421201615210501105064501562020244216516152310063135512221455045300342211403
001211403144420455554423216332215200446124050665565420055553546105000034160513122231050524220140011
010222034210203122402014343566262222246103065613373733360061263604223104106135234020024543242111403
133113440330510405504554625242222200403366266153277146434533626152126510506334524322514123130210430
101113041432001410142511513526503002532162171436233673475525363642630611162522443352502205024124331
324312213553041030426555020660523457632523764416232512767555566551645346253661665442120340412302333
222123425201320323442604100535316531114411567157656317576577367225171531643603563142005225003430304
230404233442530203464653423224331773327325127722375144767252343327447164151244036263205440245102240
020311403313133205655466214461271263366243355275525631512333123546621214666605403224540121240310404
223432305440325556610201021457211262246351424434658664512646355413752541213342520233125105551331330
410041131121534131115352632731175264753542438584525556827443273227227341353644032545140104543024000
423453033330221431012636112324171513474458778337333686836267386757554467754342542115255232403454502
141503311314266450662537113455732217424265537246342583573854773454123656425412332165232141011402443
234300432213662423462523257572767147464533826775238485872738873855313755143164616151012552443215022
033241031332110563643465311621477762732537565784247833454662525727847541531227547400151244235203533
240224003236231611317717416272324253823854672343372244362284832853474756317737336366405432515551141
044253414432535641343531616777683583443747683557473845555627346482283442342143325272142654451141515
414053450103324521235112631345676573684558268948763749867453426652857573524661772775625535603534203
452331543214300655576765671548836233443573348365895488958888986552454663627672751663623063544153145
213123262132446231133475424568643584667349958744556395357354533357757384556355745247423355145351432
342221165500622631522633663654256837955886839433536678696786657748837377774671514433313266661623225
130525523663122464775524878454547596977765643878496844435439637547575786557583612611151265003051021
052340513053426716457138866685633365633897943973977354954887846375952874745888233531473341566254321
551302462051112655343688535254486759649794957694399376794599363586956664557346654412445441323166111
423314110434112256221674555238787433834639693845964995577597377494776955386853327646756442555444510
011552365334113123648585377225387834796343948497694499984846743648856748248673875362436356643131030
020256210453324157237867264233786435595376465578894967846665837389745665523842772735511735230401305
414103611044274157467628724497537843895695848765959754656769555753737934946468683576713214360041123
433526245602544722152833257988587439889445445556677697744745565449795769495384242545477273223656031
535042251546455362245227649985889898476674985559449558958898867548978656953754247384375772356045111
323611233267761557486537664663454997974544898976574687679659946846478948476457434665442317312022000
316230521014145628676243456554785557548446999847699997896955585649999577677524437423612355506115351
233431152247465456337854474647793964448444896895598667778778977886586858366824426252253276231246145
404014103521614562682335866979974948446875556785969767656758585669745354988763786574741512533625562
556325261143135338658723684954548748574497796665868666555699769757857835743973646256523654252240304
266422162456222134742357585545497865656898785565975797777687675798668987868793755627527272716412640
455002563563223122565674686979694669768589897756676776589979994889496595734434837783346346143450216
423623414476221783674588469588594648549897978796997876765586667888788799455377766468736364172434104
461015352326313587764337768946558646676685575698789678659997955774574676447688826876753362163336656
454301143535414652353245365369994964967576769566899779689689997774557795374734563262787562775060012
653222122731245568566556776985848547968556787679686669879569789644864455634454383364432375535243521
342316353424453765457789959854867655565788786777767789769587758955585444849988572535856114662250155
250055446366322362645884695995797555897869878978866789879755795875895966677947756776764266155654244
355444312633526744883699577599657855885557866766789996876599887759779647979599732827875247133603306
355162377751474644575435897745996464769988698987886888687666856555545976965644336524766776743736625
254133626515278463466897589667596746698997878997878697797768557598696668363844637544382211555636416
360253472354274732737486847668779778565699779896887679689978676579598846458534776876223325777613344
366252652724126345554794996866795676999857566667778779778577866995589777749549487475787272211122413
431342467147246836362775364375899585598957998976787989869955888769495445683934936635824416757641010
146634042466136236774369894774864768596766587699767886867877869796986964585967784682527733236415223
156304456734165226274783349494798495455769775689668799688775958559896465983366587486585214546510053
605206622655775234243663487486755585458887997787688876799655859888594564838739982853787622517046650
423630024631261432424833633564887777468876679966768898695978957564669463675476746456267163626043120
416652052662467458722777939356947478968767765657999676685879795995878796976469668655854466754261205
220024367637577658627779495636364487645958666565757789856885784694646544987687453532241513327314431
001205127227723722658235495649657985496688668778766957998998798794864455548548428355817465523414166
025161664544242365866263435484535744784969979677987979756856584797657359539943238646534427543545433
244045631473162278554572386595375669975856555597887558858964647474989998785563783734436666571035624
353335045651153142532442577843953876787689468686959685568475794765699446555738548335432232450554121
534351561042516364445286348344476866564776585989956875745847495865559949864377745388672675423056350
540405145026441333666346536966747774764948686678756744954767654888755588373534364785112116636432366
310352124627123114353328539488485988645766859746585887776555674793469866749353577236524625202164415
302556262406343647252785226737766869695447799556645996986594999884557567783867558422423434634241154
211616662653431774753648337273939739669445597598598567499698999634858586533835878556437361125533615
213322310145376773757677875437498844399795974564596995697555949834733955347632738712147720025645345
541321441544454414357337667684975575996485879944954889455796373396388797572654885262161174164114144
210116521136412425163348474242489536463548693688568577695359465578777582266853876663474766131111432
440444421253572763622188785355529648358638647573673687439788966944953762338575361334246603164356300
054351113510556462163317846522547487438935688785489478376663949834482363723855432634571000412534200
415304004006217366116355647365825399757479337377973788354755373575483332857751272645472164332645502
525435240504040365515335242682485535453593777959944374675953567553247848654865615214462532062624325
421513461342233446252413525637885564683877795686776666737637754842856378347452214626360461550624343
445211110022304542377331711668252868465579847656559543637984976636772273847434447777513040455425001
302124154303411402267242643588322823363568229589888949467266487378624266732545514654524630362511225
434012041224431221666125342437865823243772555453745443857363576672867874747661743241420321212130504
100134115561650365223124662615754286283234445334825852647834765375247667746624712416412652603245504
132253131224342151537452754232162483446373772738888327822756583445567161173342212362212631430242244
141002023046411154261327625245617625735662275264772823842687844832822441456725161115444254441235253
200553032020156206063203436454516443664846483233468486433667666766457415762323462062450463344313222
201010451225251563362461722113361342618764328454374782643642448326624276154240645532300534152314133
444032143444456452225426623113762543374213652282765487482433537313361316346564006642411354445335302
020342143213005041512255604774164472633331333366228437463563712421513134547351014225565411402514242
422332412253335446146523426227763642635272527343272516342561634646544572211313465325345004130011204
440123035240040516464102063022655255262623463165725261752452217412716246215333530160420454541132140
143323423014024055541430440445462316717323336261624421453346176657765065655202543223211535243321002
133332221053010114200220465260340352674371352121611744231126156721603415356035634351251443041000331
404032402110401515330522443316116601151652142553741456176754127651434134661511225255414401412224430
300223104202155300140023253011351612643321427612315624461765340336455620510150244014335414004342223
230303331103324102513523351221602260544055166522131313540411061216126232512021403023242041242141113
101421341122145002224050506061436405231312566403515452555542525100113200314454334451233442312303301
303031334122345315210233432302103062261562324500250254554303502015306535302122202415335332113422223
323333442324333342200411433124165341334121455446602633255250161540440000210002155250512324214002123
020000401400224230303002512321356354406540161122666225140252401423502424351314403352020313231212111
000130010133444334124411122525303126205322331530363021562050544410330230535525023331433124342133030`;

export const day7Input = `$ cd /
$ ls
dir fwbjchs
dir hmnpr
dir jtrbrcjl
dir lcgv
dir ldqc
dir vrvl
$ cd fwbjchs
$ ls
154619 wqdlv.mdw
21648 wvbnz
$ cd ..
$ cd hmnpr
$ ls
178623 rftqqsrp.bfm
$ cd ..
$ cd jtrbrcjl
$ ls
dir nmbfwc
dir whqb
$ cd nmbfwc
$ ls
242645 lcgv
256365 wdzw.drg
$ cd ..
$ cd whqb
$ ls
161522 mrqgpv.gsm
48062 vpsgcl.gfh
$ cd ..
$ cd ..
$ cd lcgv
$ ls
dir cthtlwds
dir grldv
dir lnztfr
dir vwhf
dir znmzg
$ cd cthtlwds
$ ls
dir dghvw
dir tfwgg
$ cd dghvw
$ ls
107090 jmj.lzh
$ cd ..
$ cd tfwgg
$ ls
dir ddnfmsjc
252616 fvj
dir gng
dir lcgv
234528 mpb
181198 pzqgf.cjd
dir svvz
$ cd ddnfmsjc
$ ls
dir hwmcsdvt
dir lcgv
$ cd hwmcsdvt
$ ls
208912 wdzw.drg
$ cd ..
$ cd lcgv
$ ls
47252 tnd.ztd
$ cd ..
$ cd ..
$ cd gng
$ ls
44313 pzqgf.cjd
$ cd ..
$ cd lcgv
$ ls
182616 wdzw.drg
$ cd ..
$ cd svvz
$ ls
86968 sqtggfv
33927 vfmltgs
$ cd ..
$ cd ..
$ cd ..
$ cd grldv
$ ls
145761 mrqgpv.gsm
dir wqdlv
$ cd wqdlv
$ ls
96902 jhmsp
157064 mrqgpv.gsm
$ cd ..
$ cd ..
$ cd lnztfr
$ ls
137978 bpq
180941 fvpfmwn
148685 hsg.qgj
865 mrqgpv.gsm
$ cd ..
$ cd vwhf
$ ls
dir bgtgqzz
dir fcwzw
dir lcgv
dir mrlvtb
116134 mrqgpv.gsm
dir wszvqd
$ cd bgtgqzz
$ ls
dir dzpjg
283411 nmbfwc
dir smhhzq
240602 ttlbcssq
$ cd dzpjg
$ ls
75545 cmfw.gsj
189219 lcgv.chq
255580 lqndrsh.szf
175733 mrqgpv.gsm
$ cd ..
$ cd smhhzq
$ ls
137259 thjwcz.qhn
$ cd ..
$ cd ..
$ cd fcwzw
$ ls
59717 tpljg
$ cd ..
$ cd lcgv
$ ls
148881 mrzcdzd.gjt
68671 pzqgf.cjd
242866 slpftp
89945 vpsgcl.gfh
196497 wdzw.drg
$ cd ..
$ cd mrlvtb
$ ls
40003 rfzrwc.zjn
$ cd ..
$ cd wszvqd
$ ls
dir bhhtbv
dir lcpvwdq
$ cd bhhtbv
$ ls
dir fbh
248604 ldscpjmp
dir nmbfwc
$ cd fbh
$ ls
256295 vpsgcl.gfh
$ cd ..
$ cd nmbfwc
$ ls
83799 lcgv.vfc
$ cd ..
$ cd ..
$ cd lcpvwdq
$ ls
dir lwhq
212569 rfzrwc.clp
23957 wdzw.drg
$ cd lwhq
$ ls
240867 fzrwpl.hqd
68771 mzsqgswh
88777 pqtqv.qwz
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd znmzg
$ ls
30277 gltpwzg.gjd
211983 wdzw.drg
$ cd ..
$ cd ..
$ cd ldqc
$ ls
dir dnzfqzwv
dir dvshtm
97119 gdnlwmbf
dir gqb
dir jclb
dir jgbsw
115989 lcgv.hlf
255836 lchqqdh.wrn
dir qtdlb
dir rmljszcj
dir tqwpmw
dir vhdgcsw
$ cd dnzfqzwv
$ ls
dir tqv
$ cd tqv
$ ls
139984 dwhz.nhz
240411 pzqgf.cjd
129386 rnnr
190691 svgwt.mql
$ cd ..
$ cd ..
$ cd dvshtm
$ ls
dir lcgv
96767 mrqgpv.gsm
dir qdmmpq
$ cd lcgv
$ ls
82949 bldf.hwn
$ cd ..
$ cd qdmmpq
$ ls
dir lzgwflt
dir vgrdpbg
$ cd lzgwflt
$ ls
148651 tndbwbh
$ cd ..
$ cd vgrdpbg
$ ls
dir wqdlv
$ cd wqdlv
$ ls
130393 rqjc.dnr
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd gqb
$ ls
dir jtf
dir lvwpqs
212592 mrzcdzd.gjt
70051 tqpwdwm.nzz
dir vznbng
52226 wbsdrsfh.tfw
$ cd jtf
$ ls
232635 lvpccb.dmm
105086 wdzw.drg
$ cd ..
$ cd lvwpqs
$ ls
124821 dmhqlt
265915 mrqgpv.gsm
45481 pzqgf.cjd
$ cd ..
$ cd vznbng
$ ls
42179 nrzcpgvl.jft
17752 tld.ghn
174859 zvqglbw.ppl
$ cd ..
$ cd ..
$ cd jclb
$ ls
dir bnz
dir dtmtvbw
dir hnlrtpbz
dir pbb
dir vhjwtq
dir vpfggv
dir zmflq
$ cd bnz
$ ls
199447 mrzcdzd.gjt
$ cd ..
$ cd dtmtvbw
$ ls
dir bjthn
dir hzlhz
dir zmflq
$ cd bjthn
$ ls
272777 pgqfn.tdd
$ cd ..
$ cd hzlhz
$ ls
50958 lcgv.gvq
$ cd ..
$ cd zmflq
$ ls
207442 rrnwns.zpf
15759 wdzw.drg
$ cd ..
$ cd ..
$ cd hnlrtpbz
$ ls
69788 jhqjs.sdj
219666 jljzp.mhf
137518 jqnfg
108183 shfjz.vnr
130164 vpsgcl.gfh
$ cd ..
$ cd pbb
$ ls
dir wqdlv
dir zmflq
$ cd wqdlv
$ ls
dir fgggwt
dir hrghbhj
dir nmbfwc
dir tgmqnq
146479 vpsgcl.gfh
dir wqdlv
$ cd fgggwt
$ ls
264892 wqdlv.zsp
$ cd ..
$ cd hrghbhj
$ ls
116698 bfwtbg
dir lcgv
92758 pzqgf.cjd
dir tsdjgt
284427 vpsgcl.gfh
229621 wqdlv.pml
dir zfjjncvd
$ cd lcgv
$ ls
30459 mrzcdzd.gjt
dir wqdlv
$ cd wqdlv
$ ls
78475 wdzw.drg
$ cd ..
$ cd ..
$ cd tsdjgt
$ ls
166330 jpfms
16410 tjswm.bqv
$ cd ..
$ cd zfjjncvd
$ ls
59841 mrqgpv.gsm
$ cd ..
$ cd ..
$ cd nmbfwc
$ ls
dir jtn
151403 mmjm
240129 mmsb
206021 nmbfwc.sds
84439 vpsgcl.gfh
dir wqdlv
dir zvnrwfhn
$ cd jtn
$ ls
23555 hmmt.gbb
$ cd ..
$ cd wqdlv
$ ls
69742 jppj.vvg
$ cd ..
$ cd zvnrwfhn
$ ls
242009 lcgv.bds
$ cd ..
$ cd ..
$ cd tgmqnq
$ ls
259985 bzqjt
46410 flsm.szr
dir lcgv
89561 npfmc.vqs
17503 vpsgcl.gfh
73719 wqdlv.gjn
$ cd lcgv
$ ls
dir dzfglmz
177553 ffvzsgz
dir ljt
216443 mrzcdzd.gjt
255381 nmbfwc
dir rplqnt
84061 zmflq.vlw
$ cd dzfglmz
$ ls
220883 dqbcfgfd
$ cd ..
$ cd ljt
$ ls
11842 rfzrwc.hpn
$ cd ..
$ cd rplqnt
$ ls
119893 lszmvzst.zng
$ cd ..
$ cd ..
$ cd ..
$ cd wqdlv
$ ls
dir chnpddzn
272999 hbhwqt.fsl
144546 jvhjnsz
dir ppsm
102615 pzqgf.cjd
dir swdnss
$ cd chnpddzn
$ ls
256977 pzqgf.cjd
dir wqdlv
$ cd wqdlv
$ ls
6565 hlcqgmj
$ cd ..
$ cd ..
$ cd ppsm
$ ls
238358 fvw.bzw
dir ggjnl
265010 mrzcdzd.gjt
201818 rfzrwc
dir ssggblm
$ cd ggjnl
$ ls
45841 nlnrrqf.fwn
$ cd ..
$ cd ssggblm
$ ls
276584 djqb.ngq
18926 lcgv
$ cd ..
$ cd ..
$ cd swdnss
$ ls
dir bmrzhjs
$ cd bmrzhjs
$ ls
269825 mrqgpv.gsm
3162 rdmbdwq.bmv
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd zmflq
$ ls
dir hnrnldw
dir lcgv
dir mpmcghz
dir nbbv
dir qsnfzp
dir tntnjg
dir wqdlv
$ cd hnrnldw
$ ls
102631 wjbbjwtm.vvz
$ cd ..
$ cd lcgv
$ ls
dir dzz
dir hbzzf
dir jncrbhc
205204 lqnrp
dir mzzpfnr
dir nmbfwc
dir rfzrwc
dir rnrmhfz
dir zmflq
$ cd dzz
$ ls
dir cvvdv
226221 nggtqdzn
94641 npmpjnjm.bzg
dir rsdw
dir sjrb
41983 vfdz.ngz
271561 zmflq.zsc
$ cd cvvdv
$ ls
64260 hhqv.tsg
31245 pzqgf.cjd
280268 znjjp
$ cd ..
$ cd rsdw
$ ls
dir lcgv
$ cd lcgv
$ ls
37080 nmbfwc
$ cd ..
$ cd ..
$ cd sjrb
$ ls
233530 mrqgpv.gsm
$ cd ..
$ cd ..
$ cd hbzzf
$ ls
36018 mrqgpv.gsm
$ cd ..
$ cd jncrbhc
$ ls
205345 mrqgpv.gsm
244683 nqpcpt
$ cd ..
$ cd mzzpfnr
$ ls
dir hmjzlr
dir lcgv
dir mczs
dir wqdlv
90391 wqdlv.pdr
144119 zmflq
$ cd hmjzlr
$ ls
268342 svsd.jcd
$ cd ..
$ cd lcgv
$ ls
dir pwhl
dir rfzrwc
$ cd pwhl
$ ls
42795 gvmt
82576 wdzw.drg
$ cd ..
$ cd rfzrwc
$ ls
dir jjl
dir mqp
156985 mrqgpv.gsm
dir wptr
dir wqdlv
$ cd jjl
$ ls
dir jrjjr
104785 nmbfwc
20108 wdzw.drg
$ cd jrjjr
$ ls
243753 hgndlcrv.wbc
$ cd ..
$ cd ..
$ cd mqp
$ ls
142621 cljnbs
$ cd ..
$ cd wptr
$ ls
46279 vjqlvhrh.njr
$ cd ..
$ cd wqdlv
$ ls
104474 vpsgcl.gfh
$ cd ..
$ cd ..
$ cd ..
$ cd mczs
$ ls
186843 mrqgpv.gsm
dir pjm
dir thbwb
$ cd pjm
$ ls
dir wqdlv
$ cd wqdlv
$ ls
201647 sgtt
$ cd ..
$ cd ..
$ cd thbwb
$ ls
146494 mrqgpv.gsm
$ cd ..
$ cd ..
$ cd wqdlv
$ ls
103876 mrqgpv.gsm
$ cd ..
$ cd ..
$ cd nmbfwc
$ ls
dir fgctdds
dir rwgscjbv
$ cd fgctdds
$ ls
205015 bwvshdcz.dpp
$ cd ..
$ cd rwgscjbv
$ ls
242899 rbmtfdhp
$ cd ..
$ cd ..
$ cd rfzrwc
$ ls
dir bnsgzwhn
228624 ffj
dir lcgv
dir rcvwcbfd
268775 vbhsh.nnz
129373 vpsgcl.gfh
68919 wqdlv
dir wqmdw
dir zmflq
153277 zmflq.frv
$ cd bnsgzwhn
$ ls
9892 ltcrrzhb.njc
dir wpwmflr
dir zmflq
$ cd wpwmflr
$ ls
274142 bfj.fbw
dir rfzrwc
dir srnm
$ cd rfzrwc
$ ls
161517 mrqgpv.gsm
dir zbhgwsd
$ cd zbhgwsd
$ ls
43750 vbqmpbcr.zwz
$ cd ..
$ cd ..
$ cd srnm
$ ls
dir rvvtgr
$ cd rvvtgr
$ ls
164604 wzgbzbn
$ cd ..
$ cd ..
$ cd ..
$ cd zmflq
$ ls
184482 mrqgpv.gsm
80280 pzqgf.cjd
183303 zln.tbm
$ cd ..
$ cd ..
$ cd lcgv
$ ls
dir lcgv
dir pqttlp
$ cd lcgv
$ ls
dir bpjzg
$ cd bpjzg
$ ls
99853 wdzw.drg
$ cd ..
$ cd ..
$ cd pqttlp
$ ls
dir bgvhcgfn
45115 mrzcdzd.gjt
248058 qnvhgpw.ddw
112129 rfzrwc
$ cd bgvhcgfn
$ ls
228291 nmbfwc.gqj
$ cd ..
$ cd ..
$ cd ..
$ cd rcvwcbfd
$ ls
dir vtrtt
dir wgp
$ cd vtrtt
$ ls
138009 pzqgf.cjd
dir ztsvzpn
$ cd ztsvzpn
$ ls
51632 vpsgcl.gfh
$ cd ..
$ cd ..
$ cd wgp
$ ls
81030 lcgv.zhv
$ cd ..
$ cd ..
$ cd wqmdw
$ ls
dir zmrdf
$ cd zmrdf
$ ls
dir qqgw
$ cd qqgw
$ ls
58554 gqpqvplc.zvr
$ cd ..
$ cd ..
$ cd ..
$ cd zmflq
$ ls
224544 mrzcdzd.gjt
254976 pzqgf.cjd
$ cd ..
$ cd ..
$ cd rnrmhfz
$ ls
19759 lcgv.stz
$ cd ..
$ cd zmflq
$ ls
22390 nftzlqg.qmp
80148 wqdlv
$ cd ..
$ cd ..
$ cd mpmcghz
$ ls
169324 mrqgpv.gsm
65924 wdzw.drg
$ cd ..
$ cd nbbv
$ ls
115297 bqcrc.prw
58148 pvzv.qwf
dir wqdlv
$ cd wqdlv
$ ls
145268 mrzcdzd.gjt
35745 nmbfwc.hgv
112142 wqdlv
$ cd ..
$ cd ..
$ cd qsnfzp
$ ls
241308 nmbfwc.hmg
$ cd ..
$ cd tntnjg
$ ls
19543 mrqgpv.gsm
667 wqdlv
$ cd ..
$ cd wqdlv
$ ls
dir dqpgtmdl
dir jrqsqrv
189727 mrzcdzd.gjt
dir rfzrwc
208280 vpsgcl.gfh
281557 vwsljgn.mwd
119829 zmflq.hgd
$ cd dqpgtmdl
$ ls
268413 qcw.slb
$ cd ..
$ cd jrqsqrv
$ ls
238387 mvllmjc.wvm
213020 nqp.gdr
157257 nzdmplg.zqh
dir ppwcgc
24914 pzqgf.cjd
dir zjr
dir zmflq
$ cd ppwcgc
$ ls
249714 bsrnnhrr.spq
dir cvnd
$ cd cvnd
$ ls
248610 pzqgf.cjd
$ cd ..
$ cd ..
$ cd zjr
$ ls
224145 smwb.mmz
$ cd ..
$ cd zmflq
$ ls
250519 ftggp
147304 vpsgcl.gfh
238706 wdzw.drg
258323 wqdlv.bjp
dir wqgngf
$ cd wqgngf
$ ls
14302 bdz.jdw
dir jpgfsgd
dir ldwgr
22718 nwfh.nzf
$ cd jpgfsgd
$ ls
dir lcgv
dir qbrwz
$ cd lcgv
$ ls
284229 qhwc.zpq
dir wsjs
$ cd wsjs
$ ls
111635 lcgv
$ cd ..
$ cd ..
$ cd qbrwz
$ ls
199057 gpssftw.wdb
$ cd ..
$ cd ..
$ cd ldwgr
$ ls
260404 gdnpg.vjb
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd rfzrwc
$ ls
dir lmcg
$ cd lmcg
$ ls
32819 sjjztgr.rfj
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd vhjwtq
$ ls
dir qgqbrv
$ cd qgqbrv
$ ls
176900 gwbnqtn.rnj
$ cd ..
$ cd ..
$ cd vpfggv
$ ls
144809 cmc.srv
117565 nhddq.bqn
dir scw
dir tpmnhdc
dir vvp
71774 wqdlv.gdm
61647 zmflq
174026 zmflq.wzn
$ cd scw
$ ls
2295 bqbsrj.gnc
243386 mfmdqhh.mzl
$ cd ..
$ cd tpmnhdc
$ ls
dir fjwr
dir lcllz
dir nmbfwc
$ cd fjwr
$ ls
133256 pwgtqz.dpm
159987 vpsgcl.gfh
$ cd ..
$ cd lcllz
$ ls
dir flwws
210654 qmbfw.bsv
dir zmflq
$ cd flwws
$ ls
222222 nmbfwc.vhj
$ cd ..
$ cd zmflq
$ ls
235011 jlzfbt.wlb
49525 rfzrwc.fnc
$ cd ..
$ cd ..
$ cd nmbfwc
$ ls
133730 dqdqhvm
dir lcgv
188291 nmbfwc.qhv
110039 wdzw.drg
249996 wqdlv
dir zmflq
dir zppcvq
$ cd lcgv
$ ls
dir wths
$ cd wths
$ ls
120313 jdbtlf.rrn
$ cd ..
$ cd ..
$ cd zmflq
$ ls
124906 dqdcpzh
$ cd ..
$ cd zppcvq
$ ls
112537 mrzcdzd.gjt
$ cd ..
$ cd ..
$ cd ..
$ cd vvp
$ ls
dir fsw
194927 hvlm.pbd
dir nmbfwc
230376 pgsq
$ cd fsw
$ ls
111889 nmbfwc.smt
dir rfzrwc
$ cd rfzrwc
$ ls
282718 gbvss
$ cd ..
$ cd ..
$ cd nmbfwc
$ ls
dir fvh
160971 ngqvztv.hfg
dir rfzrwc
$ cd fvh
$ ls
256956 mrqgpv.gsm
14363 vbvsncs.jjw
172959 wdzw.drg
$ cd ..
$ cd rfzrwc
$ ls
257264 vpsgcl.gfh
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd zmflq
$ ls
10486 lbdtpnps.jhq
118145 rlgjvn.nvf
176390 wdzw.drg
$ cd ..
$ cd ..
$ cd jgbsw
$ ls
dir cfdljgh
214846 dwqdqv.ftq
dir rfzrwc
147094 vpsgcl.gfh
$ cd cfdljgh
$ ls
261471 mrqgpv.gsm
$ cd ..
$ cd rfzrwc
$ ls
dir fcvfw
dir gvqrwgrs
57417 zfqrqv.fvp
$ cd fcvfw
$ ls
279614 wdzw.drg
$ cd ..
$ cd gvqrwgrs
$ ls
dir sgfltf
$ cd sgfltf
$ ls
204207 mstlc.wtj
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd qtdlb
$ ls
dir gjpmcvwp
dir nsjlcmfz
dir wqdlv
$ cd gjpmcvwp
$ ls
dir cjjdzcwm
$ cd cjjdzcwm
$ ls
233873 pdnsrz.vfp
$ cd ..
$ cd ..
$ cd nsjlcmfz
$ ls
53472 nmbfwc
dir qvpj
$ cd qvpj
$ ls
150929 mrzcdzd.gjt
$ cd ..
$ cd ..
$ cd wqdlv
$ ls
dir qccsnjd
$ cd qccsnjd
$ ls
65908 hsrqhn.hjr
267802 zmflq.jdt
$ cd ..
$ cd ..
$ cd ..
$ cd rmljszcj
$ ls
dir jnstrbj
172566 nbtszsgl
dir wqdlv
$ cd jnstrbj
$ ls
232158 fgccmchh.wqg
236339 mrqgpv.gsm
281875 rfzrwc.sfd
$ cd ..
$ cd wqdlv
$ ls
58492 wdzw.drg
213853 wqdlv.zlz
$ cd ..
$ cd ..
$ cd tqwpmw
$ ls
92747 pzqgf.cjd
$ cd ..
$ cd vhdgcsw
$ ls
125104 crfw.sfv
dir flhbhzlt
139949 mrqgpv.gsm
dir rfzrwc
dir rnz
97174 zmflq.vpn
$ cd flhbhzlt
$ ls
282258 mrzcdzd.gjt
$ cd ..
$ cd rfzrwc
$ ls
dir lcgv
$ cd lcgv
$ ls
dir dlpng
dir glqrj
178245 lcgv
106863 nmbfwc.fgr
$ cd dlpng
$ ls
195950 rfzrwc
$ cd ..
$ cd glqrj
$ ls
248909 pzqgf.cjd
34214 vpsgcl.gfh
$ cd ..
$ cd ..
$ cd ..
$ cd rnz
$ ls
dir chfccv
dir cmsccq
dir zmflq
$ cd chfccv
$ ls
13688 mrqgpv.gsm
162142 vpsgcl.gfh
$ cd ..
$ cd cmsccq
$ ls
94122 dzpsltth
190025 rfzrwc
dir twqt
12230 wgghbcz.tph
60111 wqdlv
$ cd twqt
$ ls
109250 wdzw.drg
$ cd ..
$ cd ..
$ cd zmflq
$ ls
174075 wdzw.drg
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd vrvl
$ ls
dir pnfv
210089 rfzrwc
dir stcfmz
$ cd pnfv
$ ls
183315 rhmztnnh
$ cd ..
$ cd stcfmz
$ ls
115637 lcgv`;

export const day6Input = `mnlnvlljqqccznnjtjljbllrtllwwpmmhjjbbzppnndmmsppdqqwvvstvssgmsggmlmttnvvfbbdsssnzzbssjrsjjpmpvmmcjjwsssndsslwsswtwnwrrslshhvzzsppffmpfmmfvfpfpsssqpqzpqqcjcjnjcnnzbzjzpzbpbnbwbcctvvhgvgsvvpwwvjjvqjjjdqqrmrmqmsqszqsqpsqslsddhbhcbhbchcvvjvjcjnccdbcdcrddldblbffhvffpvpzpvvmvfmmwhwqhqvhqhmmpdmmlbmbgmbbrqqpmqqcvcmvvcncllptltvtdtbbqzzcggjgsjjvjsvvgmgffqhqqgpptspsffvdvbbhqhzzllvvjbvvbpppggfpgptgtvvzdvdzdgzgccmmphpmhppldlnlpnnhghhrrgwrwssnllmpllbvbvqvtvhtvvmnvvpgvgfvggtztpthhcfhfqfhhnhtnhhljhjppqjjffgjggrwrjjhphzhtztggwswnwzzvbzzmmtrtqtjqttwlwmmmmnddmnddwvvcllgrgfgzznwnsswjjhwwspsbbvzzqvzvbvcvmmtltnlnfnfnwwsvwwpswppjhjdhhmbbblfbfwffwvvjgghwhzhjzzrttwhwjhjchjhggdrgdgmmsjsfstftvtmtctggcwgcgzccgzgsgrgmmjhhqzzrmrttgtgfgcffvsfvvslsvvpqvvnjnrrwdwcwcnnhllwpwdpwdpdqqtwtftdftddppncpnccllqqrffpssgvsvtvmvssrbrhbbzggtssdsvddqfdfjfhjhdjhhncnddfpdfdmmrddncnvcnvccgvvhzvzwztwzwtzwtwqttrlrvrddztzrzcccgmmqgqjgqjgjqqspqqpjppbggchcqcpqqgbgdbbspbbrbhrhzhqhrqhhhtbhhvshspsvsggjdjwjwvjvdvwddjggmrrbnrrztthlllhlclbclbbhpbhphjhccdwccdbbjrbjjmrjrhhnlnjllltwltlmmlqlnqntqnntsnsqqvtvwvgwvwnncgcdctddnttfjfqfttrhrjhjqqcnnsmnmgmqgmgbblcctntrntnccnvvmpmjjvfjfrrbpbttsbttvnttmnnjdnndnzntnrnwrwcctllvhvqhhddmzztppphghphzzglzlnnfccrfffvvhllpspwssstwstsvttcrtccfssbccdjdqdfqddrbrqbbtllmmsfmfcmmzwzpznpnttjgtgbbdtdvdwwpmphpprsrjrbrqbqwwljlslrlrhhpchpcprcrtcrcfcfssndsspddcjjjfmfqfggmssnhsnhnpncnfnmffdrdjdhjjrgjrjgjqgjqqlmlljffbcfcrrrzwwftwtrrpgpprqqmrmhmwhwmmcrrhqrqwqppwjwggpdpgpvgvzvttqlljhhbvbhblhhcsssvmsmppcvpvrvzvbvtbtssplpgptgtnthhvwhvwwfvvfwwmtwmwfmfgmgnmnllgsgmsgswwhqhhhzqhhfwwnttmfmrrfnnpbpssvbsshqhqvhqqbmbpmbmqqjtjqjvjtjjhtttpzphpqqwqfqttqqhfhbfhfwwcpcpssdvvzhzwwqddjzdjdldlggvnvlnlbljlqjjmcczbccznnlnslswlwplpttvrvllfwflftllhclldhlhddbvvpvzpvpmmrccvgvdvqqjcqqwvvnjjlbbjwjrjhhlzhlhttljlcjjsnsgngrnntzzbsbmbsbrbdrdppjrjlrrjljqlqhqqnqsgdvhpgdhmnslqtjclmcfzrmgmlfnjbzznfgfprvwprwdbcgfcclmspgnzpbshwjbqvhzhrhswjzbfvnmcjtfvqbwmjpvfvctpmwsspdbtvfhfdfzjdpqnvslgmdvrnflzwzcnzmvzsvznwhpwtjwnqdgrrttmmdwzbbnwtllpbffrgtpjjjwltqrcbqcttdwnfjpmhdsbbpqmstjqchgjvfrmrbgqrlstnbdnzzzbzbsmsnnsssswmqhcbswtjhmcgnwmcclhzjqjzqcpbzgdzjgqzpqbmvvhtcznfrhdndswfvfhtfpdpszpjqrlwfdscvcngftwqmfttjtjrlbgcwvcjwsstqmcblmjzsgtgrqnqqvhzhvsphjmbcpfcznlcqldcvhlsvggbjngmhspwwqhlwstslvwmmbwqdmrgdvvnlstmjllhzscrhzjtmnsjfbndnlmzqbzgdgbcqchnbvwsftjtznnbsnvsgzpdzdqznjsslrlfnccdhwsljhczggvmgqswjltmrqqmwtbzmtdzhpjcvmwsscsdzpfnwlcrrdgzqqdmgwdlzvvvjcqsgpcwvrdnrstpcmgfjnjffbfmgzjthhllzrlsjtnqfppltbrlnqnjvqlvtpqvsbfgmmlcdzhgmzzqjwtqtzmpwwddbqrqnfzzpsjglsjddsslwwlrttzfzplmwsswlnvrvwwcgddjwcmvsjjbfgcfjmthfbpmcwjptchhnsmzttjqnwzdljffghhqdcwzwgbvfsmwqdbtblphdgcmbhprtbccjbzqrpvjdbnsmlwfntvjgptnshzmddwbhgwsnfrjbpqqwlsfdpnmmnnwhdmhzvjcmddbdnjzfzvffbgdqgwbggprcrbzwhvtzzgbhhcscrlmfgztfswjbsnwsmdfwlntwjzvlwhvlrfzszllmflmrsrcfnncvszvgdmmnvgrqnjhljcnrrhpdhffwmrsqfnbcpfdmmgppwjbjrwdfmpcrbznrjnbmssszhnlbpgmlczhhcdtgjqcbqrvzcbpgrftfhzdqthhspwnqqswntlpcmmqtcszngpggqvfjnmnprhdfjsngwrncjcmqdmjhpdlfnshpdlnlfpcnprwjgdvwwbvhvsbrfjtqsqjnvcpfdsrnfwmrrbtcvcqzflhdlbpcthzthdjzsrvwgbhjvhbtrngthfrszlvrbtnscsqlblcwlngslspcrhqzzdlzcdbhqdhthlpmdrntbhnqtwtzwpndbgphpsllbvgqjtmszdvjpgttzcmbwgrgdwmsbfgvgbbcmsnhvmnsbcsthsdwdqtghpdclfbglbdjgnnnwhmzzvnhbmgfbmvqwvwqhdswgtzslspmbmznnwdmjbzbddhzchtdzdzgwtlmlpmwrqvghpfwhvfjrtvmjwgjjnwdwnpdcqjdmcctjfcrdgpvczvnhlrbfmqgnrhmdwsrmmpqhvwgqgbqccpznpjfldwpntnvzgdfzljmtqwvfnrdsjsqgbvzjsczwwjggqtrpvwgqggwwhqggtgqfjmzsmjvdhdwqggbgnftpqqqlsfpflwrdpjwnhfdpchcgntjshgtwnwrnpsvwmplvqcltbgrcpflpgzbqfclghfnwjchnbgjnplgldmphdplvjrnrtzcmlftprsnmrjmnffpqjlvqlztbwprjwprrmmgzhjgdnhbfdrwjtvsvnbqhtfhbqgdrvcwlwfdbbcthgvttpvrwrqmpmrmvgpjzwlpvbqcvgccpgfddjbwhrvgqmjqzwgghllrtrblcpbttmcrgjsftlqhjfvqnbhmhbhngwnfqtgdttstzvmstrqcpfjrdgtsdbqqccqvbhpwhnpmpqgntfqszndjrmfhlqjqjbqvjtlfmrnnzzrtqlzzhjfqmmsmzvzrcplmfjpcmpfmpzbsbrmbnbnjqwjcfwnnwwrwzvvrsvhvrwnhlmwqjdztqthcwnwrlbjdflfsbplbwfmzqqnpwvzjbcfdgztpwttlrvhlfzzsfltpqwcpnzlsqgvwnqfvgclrfvssfcfmfvvjsndrhqdbrqfggfhjbvdvvmgpglqzwgjdmqtscjpfhgsbshghtmftrrhznttpzrzcsmrrvzdjmwtmbcbpqbsdmqzqdzrncwzmptltvdphsltfrhbbrdzbnbsqdhfvrgvmbgfvwblsjvfphlpzfvsllwnqjmbhngzzslcdmdzfgrgscbzggrzmbmwlzbnpzcvsbsfgdpnwzljsf`;

export const day5Input = `
                        [R] [J] [W]
            [R] [N]     [T] [T] [C]
[R]         [P] [G]     [J] [P] [T]
[Q]     [C] [M] [V]     [F] [F] [H]
[G] [P] [M] [S] [Z]     [Z] [C] [Q]
[P] [C] [P] [Q] [J] [J] [P] [H] [Z]
[C] [T] [H] [T] [H] [P] [G] [L] [V]
[F] [W] [B] [L] [P] [D] [L] [N] [G]
 1   2   3   4   5   6   7   8   9

move 2 from 2 to 8
move 2 from 1 to 6
move 8 from 7 to 1
move 7 from 5 to 4
move 1 from 6 to 4
move 1 from 6 to 3
move 6 from 3 to 5
move 9 from 8 to 1
move 3 from 6 to 7
move 14 from 4 to 1
move 6 from 1 to 7
move 16 from 1 to 9
move 6 from 1 to 4
move 1 from 8 to 6
move 4 from 1 to 5
move 11 from 9 to 7
move 2 from 1 to 8
move 1 from 6 to 7
move 1 from 8 to 7
move 1 from 8 to 3
move 7 from 4 to 3
move 14 from 7 to 6
move 8 from 6 to 9
move 19 from 9 to 2
move 1 from 1 to 2
move 2 from 9 to 7
move 9 from 7 to 8
move 2 from 2 to 8
move 16 from 2 to 9
move 4 from 8 to 2
move 1 from 7 to 9
move 3 from 9 to 6
move 3 from 3 to 6
move 11 from 9 to 2
move 7 from 5 to 3
move 2 from 5 to 9
move 6 from 6 to 4
move 1 from 6 to 4
move 4 from 6 to 8
move 5 from 9 to 1
move 4 from 1 to 7
move 3 from 2 to 6
move 3 from 4 to 1
move 1 from 4 to 1
move 2 from 1 to 3
move 4 from 3 to 7
move 1 from 5 to 2
move 3 from 1 to 6
move 15 from 2 to 5
move 3 from 6 to 3
move 13 from 3 to 8
move 2 from 4 to 2
move 9 from 5 to 4
move 2 from 2 to 5
move 5 from 7 to 5
move 10 from 8 to 6
move 1 from 2 to 5
move 10 from 4 to 6
move 4 from 8 to 6
move 3 from 7 to 1
move 3 from 1 to 9
move 1 from 2 to 1
move 8 from 5 to 2
move 3 from 6 to 9
move 6 from 8 to 5
move 6 from 9 to 2
move 1 from 1 to 9
move 10 from 2 to 1
move 4 from 8 to 5
move 10 from 5 to 9
move 11 from 9 to 7
move 5 from 7 to 9
move 1 from 9 to 2
move 3 from 2 to 9
move 2 from 2 to 8
move 4 from 9 to 5
move 4 from 1 to 9
move 5 from 5 to 2
move 5 from 1 to 4
move 21 from 6 to 9
move 3 from 2 to 9
move 2 from 8 to 1
move 25 from 9 to 6
move 4 from 5 to 7
move 1 from 4 to 6
move 6 from 6 to 4
move 3 from 4 to 6
move 7 from 7 to 3
move 4 from 9 to 1
move 3 from 7 to 8
move 2 from 9 to 8
move 2 from 2 to 8
move 4 from 1 to 3
move 9 from 6 to 2
move 13 from 6 to 4
move 13 from 4 to 5
move 1 from 5 to 8
move 2 from 2 to 3
move 6 from 5 to 3
move 19 from 3 to 6
move 1 from 4 to 9
move 2 from 8 to 1
move 5 from 2 to 3
move 5 from 1 to 9
move 7 from 5 to 4
move 1 from 8 to 3
move 1 from 2 to 6
move 8 from 6 to 3
move 1 from 9 to 8
move 11 from 4 to 2
move 1 from 4 to 6
move 1 from 2 to 8
move 5 from 3 to 4
move 4 from 9 to 6
move 1 from 6 to 8
move 9 from 3 to 1
move 7 from 2 to 9
move 1 from 2 to 6
move 3 from 1 to 8
move 2 from 2 to 3
move 3 from 9 to 7
move 3 from 4 to 7
move 2 from 4 to 3
move 2 from 3 to 5
move 8 from 6 to 4
move 6 from 8 to 6
move 2 from 9 to 4
move 5 from 8 to 6
move 3 from 7 to 5
move 1 from 5 to 8
move 1 from 8 to 2
move 1 from 5 to 1
move 11 from 4 to 9
move 2 from 6 to 3
move 2 from 2 to 4
move 6 from 1 to 2
move 6 from 2 to 1
move 3 from 7 to 3
move 2 from 4 to 7
move 4 from 6 to 5
move 7 from 3 to 7
move 5 from 9 to 6
move 22 from 6 to 8
move 2 from 6 to 5
move 2 from 8 to 4
move 14 from 8 to 7
move 11 from 7 to 4
move 3 from 8 to 1
move 9 from 7 to 8
move 10 from 1 to 4
move 1 from 7 to 4
move 4 from 8 to 7
move 6 from 4 to 9
move 7 from 4 to 1
move 3 from 4 to 8
move 1 from 5 to 8
move 8 from 5 to 3
move 4 from 3 to 9
move 7 from 8 to 9
move 3 from 8 to 3
move 2 from 8 to 2
move 7 from 9 to 1
move 2 from 2 to 8
move 8 from 9 to 1
move 8 from 1 to 7
move 7 from 1 to 5
move 7 from 7 to 1
move 11 from 9 to 8
move 9 from 8 to 5
move 2 from 8 to 5
move 3 from 1 to 8
move 2 from 3 to 7
move 6 from 4 to 1
move 6 from 1 to 6
move 5 from 7 to 1
move 2 from 4 to 6
move 1 from 3 to 5
move 4 from 7 to 4
move 2 from 8 to 7
move 10 from 5 to 6
move 9 from 6 to 1
move 8 from 1 to 6
move 1 from 7 to 2
move 9 from 6 to 4
move 2 from 4 to 3
move 3 from 8 to 1
move 1 from 2 to 4
move 4 from 4 to 1
move 7 from 4 to 3
move 3 from 3 to 2
move 1 from 7 to 6
move 9 from 6 to 7
move 6 from 7 to 4
move 2 from 7 to 2
move 6 from 4 to 7
move 2 from 2 to 9
move 1 from 2 to 4
move 1 from 7 to 4
move 4 from 7 to 6
move 4 from 5 to 4
move 1 from 2 to 5
move 1 from 7 to 5
move 1 from 2 to 6
move 6 from 4 to 3
move 9 from 3 to 9
move 4 from 6 to 2
move 7 from 3 to 8
move 22 from 1 to 7
move 1 from 1 to 7
move 2 from 8 to 3
move 4 from 5 to 6
move 2 from 3 to 2
move 6 from 2 to 8
move 3 from 8 to 6
move 1 from 4 to 8
move 1 from 1 to 8
move 8 from 6 to 7
move 7 from 8 to 9
move 22 from 7 to 4
move 3 from 5 to 6
move 1 from 8 to 1
move 2 from 8 to 2
move 3 from 6 to 4
move 1 from 1 to 3
move 15 from 9 to 1
move 5 from 1 to 5
move 3 from 7 to 6
move 5 from 5 to 6
move 4 from 4 to 3
move 6 from 6 to 9
move 7 from 7 to 6
move 5 from 6 to 7
move 4 from 1 to 9
move 3 from 7 to 4
move 2 from 9 to 7
move 5 from 3 to 5
move 3 from 6 to 3
move 5 from 4 to 6
move 10 from 9 to 5
move 1 from 2 to 9
move 1 from 3 to 5
move 1 from 2 to 9
move 3 from 1 to 6
move 2 from 9 to 2
move 7 from 6 to 5
move 15 from 4 to 9
move 2 from 4 to 5
move 1 from 3 to 4
move 9 from 9 to 1
move 1 from 9 to 2
move 2 from 9 to 4
move 11 from 5 to 4
move 1 from 9 to 3
move 1 from 6 to 8
move 4 from 7 to 8
move 4 from 8 to 9
move 15 from 4 to 7
move 1 from 6 to 7
move 1 from 3 to 7
move 6 from 9 to 6
move 1 from 3 to 7
move 1 from 2 to 1
move 1 from 9 to 5
move 3 from 6 to 1
move 11 from 1 to 4
move 6 from 5 to 1
move 2 from 2 to 5
move 1 from 5 to 7
move 2 from 6 to 1
move 7 from 5 to 7
move 3 from 5 to 6
move 4 from 6 to 1
move 11 from 4 to 3
move 1 from 8 to 5
move 23 from 7 to 6
move 18 from 6 to 9
move 1 from 5 to 9
move 1 from 4 to 2
move 3 from 3 to 7
move 3 from 3 to 8
move 17 from 1 to 8
move 5 from 6 to 5
move 2 from 7 to 1
move 20 from 8 to 2
move 4 from 7 to 2
move 3 from 9 to 5
move 7 from 9 to 7
move 6 from 9 to 2
move 1 from 1 to 8
move 3 from 9 to 4
move 7 from 5 to 2
move 6 from 7 to 1
move 1 from 1 to 8
move 3 from 2 to 6
move 1 from 7 to 6
move 2 from 8 to 9
move 35 from 2 to 4
move 3 from 3 to 2
move 1 from 5 to 7
move 2 from 3 to 9
move 3 from 1 to 6
move 2 from 2 to 1
move 32 from 4 to 7
move 3 from 4 to 8
move 3 from 9 to 5
move 1 from 1 to 2
move 21 from 7 to 5
move 2 from 2 to 1
move 3 from 1 to 2
move 15 from 5 to 1
move 3 from 6 to 7
move 3 from 4 to 6
move 3 from 8 to 5
move 1 from 9 to 3
move 8 from 7 to 2
move 6 from 5 to 2
move 9 from 1 to 6
move 4 from 7 to 1
move 2 from 5 to 4
move 2 from 4 to 3
move 3 from 5 to 4
move 17 from 2 to 7
move 3 from 3 to 5
move 2 from 4 to 8
move 1 from 4 to 3
move 5 from 7 to 9
move 1 from 3 to 6
move 4 from 1 to 7
move 4 from 6 to 7
move 2 from 5 to 2
move 1 from 1 to 3
move 10 from 6 to 4
move 1 from 3 to 7
move 20 from 7 to 8
move 8 from 4 to 8
move 1 from 2 to 8
move 4 from 9 to 1
move 3 from 7 to 4
move 2 from 4 to 9
move 2 from 6 to 3
move 1 from 2 to 8
move 1 from 7 to 6
move 1 from 9 to 5
move 3 from 5 to 9
move 4 from 9 to 2
move 1 from 4 to 5
move 1 from 5 to 3
move 3 from 2 to 4
move 1 from 9 to 7
move 1 from 2 to 1
move 1 from 7 to 1
move 11 from 1 to 2
move 3 from 1 to 7
move 25 from 8 to 5
move 1 from 6 to 3
move 1 from 6 to 2
move 7 from 8 to 2
move 9 from 2 to 8
move 2 from 4 to 7
move 2 from 5 to 7
move 2 from 5 to 2
move 5 from 5 to 1
move 7 from 5 to 1
move 2 from 4 to 9
move 3 from 5 to 6
move 1 from 1 to 8
move 1 from 5 to 6
move 1 from 4 to 7
move 1 from 9 to 2
move 3 from 5 to 2
move 2 from 6 to 9
move 3 from 9 to 8
move 1 from 5 to 4
move 3 from 3 to 9
move 10 from 1 to 5
move 4 from 2 to 8
move 2 from 6 to 1
move 3 from 9 to 7
move 1 from 1 to 9
move 1 from 4 to 3
move 1 from 9 to 2
move 9 from 8 to 2
move 2 from 3 to 7
move 2 from 7 to 6
move 3 from 5 to 6
move 4 from 8 to 6
move 4 from 8 to 3
move 4 from 3 to 2
move 4 from 6 to 8
move 1 from 7 to 9
move 2 from 1 to 8
move 2 from 8 to 3
move 1 from 9 to 2
move 13 from 2 to 4
move 6 from 5 to 7
move 2 from 5 to 7
move 10 from 2 to 4
move 11 from 7 to 8
move 1 from 6 to 4
move 4 from 6 to 7
move 24 from 4 to 9
move 11 from 7 to 4
move 1 from 3 to 8
move 1 from 3 to 5
move 4 from 4 to 2
move 5 from 4 to 2
move 9 from 2 to 5
move 4 from 9 to 5
move 1 from 5 to 1
move 2 from 5 to 7
move 2 from 2 to 5
move 1 from 1 to 7
move 2 from 2 to 3
move 18 from 9 to 6
move 9 from 8 to 1
move 2 from 9 to 5
move 5 from 1 to 8
move 2 from 8 to 7
move 4 from 8 to 4
move 5 from 8 to 7
move 10 from 5 to 1
move 10 from 7 to 4
move 4 from 5 to 8
move 14 from 1 to 9
move 6 from 9 to 8
move 1 from 5 to 1
move 12 from 6 to 9
move 4 from 6 to 8
move 11 from 8 to 5
move 1 from 6 to 1
move 19 from 9 to 7
move 2 from 3 to 5
move 13 from 7 to 5
move 3 from 7 to 1
move 4 from 8 to 9
move 2 from 7 to 6
move 7 from 4 to 8
move 5 from 8 to 1
move 1 from 1 to 3
move 1 from 7 to 2
move 6 from 1 to 6
move 1 from 2 to 5
move 1 from 8 to 1
move 1 from 8 to 2
move 2 from 4 to 8
move 5 from 6 to 1
move 2 from 4 to 7
move 2 from 9 to 6
move 1 from 6 to 5
move 4 from 6 to 2
move 1 from 9 to 5
move 2 from 4 to 5
move 4 from 2 to 4
move 2 from 8 to 3
move 3 from 3 to 2
move 4 from 1 to 2
move 2 from 4 to 7
move 4 from 2 to 3
move 4 from 1 to 2
move 13 from 5 to 1
move 1 from 6 to 2
move 1 from 1 to 8
move 15 from 5 to 2
move 4 from 3 to 1
move 5 from 4 to 3
move 1 from 3 to 6
move 1 from 8 to 7
move 1 from 9 to 8
move 1 from 7 to 8
move 3 from 3 to 2
move 1 from 8 to 2
move 1 from 3 to 7
move 13 from 1 to 4
move 3 from 5 to 3
move 1 from 1 to 2
move 1 from 8 to 5
move 5 from 7 to 2
move 1 from 6 to 5
move 2 from 3 to 4
move 10 from 2 to 5
move 1 from 9 to 5
move 3 from 1 to 8
move 3 from 8 to 3
move 11 from 4 to 5
move 12 from 2 to 8
move 4 from 4 to 7
move 10 from 8 to 5
move 2 from 8 to 1
move 1 from 7 to 3
move 1 from 7 to 9
move 5 from 3 to 7
move 1 from 9 to 4
move 7 from 7 to 6
move 13 from 5 to 8
move 6 from 6 to 7
move 5 from 7 to 4
move 1 from 6 to 4
move 2 from 4 to 9
move 1 from 7 to 9
move 3 from 4 to 3
move 1 from 3 to 6
move 4 from 5 to 7`;

export const day4Input = `94-97,31-95
7-8,11-95
25-96,3-96
6-17,5-16
35-48,18-49
5-6,5-98
77-78,63-79
56-56,28-56
84-85,22-85
35-62,34-74
9-89,88-88
20-47,11-20
3-50,1-4
49-60,52-61
7-55,54-54
28-80,81-99
8-55,35-55
5-24,5-70
58-81,59-98
3-3,4-4
7-37,6-38
95-98,1-95
51-90,43-50
17-99,16-96
3-27,4-28
38-67,20-68
20-48,19-47
18-99,17-98
1-94,2-2
85-93,8-93
42-52,53-58
24-46,46-49
27-87,86-87
76-76,51-77
3-24,2-88
20-96,48-95
21-48,22-49
9-9,8-65
12-98,98-98
34-35,35-86
15-18,17-86
2-21,1-22
45-97,10-44
13-93,5-94
18-38,37-37
35-36,35-59
6-79,5-78
36-36,35-35
3-4,3-99
41-74,41-75
33-91,4-89
15-99,15-16
15-81,16-81
88-93,87-93
37-97,38-98
18-80,80-80
6-32,7-32
67-93,68-92
2-67,67-79
24-77,23-48
48-95,49-94
47-66,48-67
62-90,5-73
87-89,14-88
43-91,26-94
2-79,1-98
64-97,64-96
8-10,9-9
41-53,41-53
44-53,19-53
40-41,4-41
48-88,47-49
26-96,8-95
20-31,4-25
25-51,26-54
88-90,89-89
35-69,17-21
7-37,6-14
26-99,27-98
84-84,81-91
32-45,44-84
97-98,50-98
5-97,2-4
23-81,22-24
75-76,5-75
24-59,34-59
31-89,88-88
1-2,1-46
58-58,55-58
30-55,29-30
7-88,87-88
35-99,35-89
31-38,30-37
33-73,34-34
13-35,12-61
2-93,17-98
6-96,7-21
43-45,3-44
21-63,20-62
91-91,72-92
95-96,30-96
41-88,30-86
59-68,58-69
19-44,11-18
40-91,2-91
78-78,17-79
1-3,2-7
29-98,29-99
61-78,77-77
74-75,6-75
20-98,19-93
51-63,2-63
1-73,2-74
4-70,4-59
51-74,50-75
86-94,11-69
27-71,42-95
61-91,61-92
57-58,8-58
16-47,25-48
8-43,4-90
5-97,1-11
46-78,50-61
5-46,5-62
25-99,26-82
12-40,20-36
20-44,20-47
96-99,4-97
9-97,97-97
5-10,11-15
3-75,1-4
24-57,23-46
79-97,29-97
37-50,38-59
5-85,6-84
22-82,2-33
9-11,10-90
36-62,37-61
32-49,48-60
74-81,75-80
36-71,35-72
36-92,35-91
88-88,34-87
14-92,13-15
84-97,26-99
65-66,49-66
35-91,34-90
33-33,11-33
6-61,7-62
3-92,17-91
2-71,1-72
39-61,38-39
1-96,2-97
53-90,13-91
51-53,52-93
2-81,1-81
22-97,23-93
63-63,62-76
6-76,7-88
76-94,76-95
24-26,25-65
1-68,2-67
6-98,6-98
12-61,11-60
5-93,6-92
29-61,29-61
11-11,10-73
10-85,11-11
4-98,3-99
22-41,22-76
39-92,56-91
6-91,3-95
40-56,41-57
32-86,13-86
97-97,97-98
66-72,46-73
25-74,74-98
11-85,11-72
39-42,9-53
32-74,37-84
97-98,21-98
39-71,32-38
9-96,95-95
17-25,31-75
96-97,51-95
9-71,71-72
31-32,26-32
14-25,10-13
37-37,38-38
2-13,3-3
38-77,39-78
51-73,72-72
97-99,3-98
59-79,78-78
5-94,4-26
16-97,16-96
88-97,97-98
50-97,50-68
2-87,2-87
5-90,9-30
51-55,53-54
87-87,87-87
39-81,40-82
51-92,4-92
13-78,17-72
41-90,42-91
43-50,22-43
84-86,62-85
69-98,85-98
2-49,4-43
5-96,4-95
11-89,3-10
24-81,25-81
27-85,39-84
33-47,34-39
18-43,19-42
39-45,40-46
26-29,26-31
4-35,36-81
31-86,32-94
9-92,9-91
8-55,8-56
22-48,21-43
25-67,25-72
94-95,53-94
12-40,11-93
58-63,57-64
44-95,94-96
7-87,42-91
7-91,7-8
4-68,32-68
53-73,25-52
9-70,8-69
45-47,46-72
1-1,3-99
46-47,35-46
2-98,1-99
1-13,13-14
31-47,30-46
50-83,82-82
14-14,1-14
3-63,42-62
27-76,26-77
4-98,98-99
16-71,14-72
13-92,13-96
58-92,40-77
11-42,41-86
4-85,2-84
69-78,41-70
27-32,27-33
17-99,8-16
22-86,86-89
88-89,57-88
38-47,39-43
98-98,2-97
8-66,9-67
8-87,3-33
45-46,11-46
79-81,1-80
80-90,82-89
47-47,46-74
50-63,60-62
9-88,8-89
15-91,15-86
12-78,11-79
75-99,13-98
83-84,13-84
18-79,18-29
42-77,42-76
2-94,93-94
4-99,98-98
57-96,60-95
31-70,70-75
4-84,1-3
1-92,7-93
33-76,3-32
5-29,19-29
19-61,62-64
10-70,6-96
1-99,2-98
27-84,28-28
53-53,52-56
72-88,54-99
77-84,74-95
1-2,3-99
2-54,3-53
40-95,3-95
3-43,1-2
8-97,65-97
14-80,14-15
34-62,29-62
3-94,95-98
55-73,56-74
9-60,35-87
32-91,32-92
41-43,42-64
32-37,32-38
9-37,33-35
22-80,22-80
1-85,85-89
23-44,22-43
11-44,10-49
1-91,11-91
23-56,4-60
69-98,38-69
55-56,55-68
8-68,5-69
52-62,52-53
43-77,42-76
4-9,8-8
47-69,68-88
18-75,19-74
46-71,45-70
65-73,68-72
29-90,30-89
31-71,30-70
11-21,13-24
69-89,70-70
9-70,68-70
49-71,72-72
95-95,95-95
11-95,10-96
13-97,13-97
17-97,16-96
22-67,59-66
24-96,25-99
11-45,44-49
33-98,32-96
4-84,4-83
88-91,89-90
37-42,37-38
25-43,9-43
48-78,42-79
7-32,8-8
9-98,10-99
4-85,1-5
82-98,20-83
67-74,68-75
5-98,6-97
76-80,80-81
28-79,27-79
28-57,56-57
88-94,20-88
7-96,95-99
1-61,5-62
97-98,3-97
82-98,19-81
72-90,73-89
44-96,45-45
35-93,39-94
10-89,6-17
22-56,1-21
35-90,89-90
95-95,10-96
16-62,23-62
1-94,1-95
25-27,13-26
9-94,20-77
19-95,18-94
18-19,18-95
6-86,2-5
97-98,7-97
23-72,94-99
12-12,11-13
8-67,9-66
84-96,81-85
97-99,4-96
45-46,14-46
53-60,53-61
59-90,90-91
57-79,79-86
32-78,77-78
64-78,78-78
27-86,86-86
37-58,23-55
5-95,74-93
4-68,56-68
13-37,2-6
80-95,7-80
3-5,4-97
1-67,3-14
55-65,20-55
81-82,81-81
24-82,24-81
30-36,29-37
67-75,11-84
12-99,18-97
61-88,88-94
21-21,20-40
2-92,1-93
51-51,50-99
72-81,69-80
96-98,95-99
39-98,38-97
13-87,12-71
25-93,50-92
15-98,15-33
87-91,86-93
3-98,5-99
8-76,58-77
64-96,50-95
25-60,24-61
69-81,28-70
95-97,14-94
23-79,22-80
45-55,44-45
51-98,52-80
73-96,14-95
35-89,36-88
54-97,55-83
70-87,71-86
81-82,13-82
11-67,11-57
84-84,61-85
9-73,9-74
8-48,7-49
1-90,89-90
3-64,1-2
5-75,5-76
1-1,1-93
82-91,90-92
76-78,64-77
8-64,7-64
9-54,10-55
14-33,13-18
21-22,20-23
7-9,8-62
19-96,20-95
57-66,57-58
78-80,11-79
83-85,60-86
78-78,64-79
4-68,3-54
21-72,41-52
66-89,65-66
15-23,24-92
37-72,58-94
62-73,2-87
94-94,18-95
3-73,4-74
14-97,96-98
5-6,5-89
8-74,87-96
26-81,25-82
33-75,3-74
18-79,39-80
14-79,15-80
30-73,29-31
9-77,23-84
2-55,39-64
31-98,30-91
41-53,42-52
16-84,17-92
21-81,20-22
40-77,39-76
25-31,30-73
95-96,59-95
20-79,8-80
21-64,21-96
29-40,8-39
98-99,14-98
32-33,32-72
15-80,24-80
68-78,69-79
33-46,34-34
4-67,66-97
22-62,91-98
38-43,39-42
15-99,90-99
18-67,18-68
4-73,1-4
9-71,10-96
52-89,51-53
77-96,27-76
5-99,3-97
28-28,27-79
16-55,51-94
12-95,96-97
28-90,29-91
4-28,27-28
32-93,2-93
3-3,3-80
15-47,16-66
1-2,1-95
64-65,21-64
77-77,45-78
64-99,34-78
62-98,88-98
30-93,2-93
4-99,4-96
17-95,86-95
36-96,83-97
34-75,8-74
20-92,20-90
6-6,5-89
68-98,69-78
19-71,19-71
6-49,14-33
8-49,8-50
13-90,14-89
45-54,45-46
69-78,69-94
1-96,2-95
27-95,27-54
7-47,5-73
93-97,25-94
96-96,68-96
3-95,27-97
24-88,16-25
23-41,16-42
66-70,59-71
17-50,16-49
5-85,4-4
19-93,9-52
41-58,53-57
17-96,16-97
51-84,63-97
14-84,13-85
68-96,68-96
20-75,20-75
86-86,6-87
4-53,3-4
11-12,11-12
2-89,88-89
50-76,41-54
65-82,78-81
75-75,75-76
21-54,22-72
17-44,18-45
10-42,10-42
59-70,60-60
27-94,26-51
3-88,89-90
77-77,78-78
30-98,2-97
36-86,17-37
2-2,1-85
41-62,42-63
19-44,81-85
8-99,99-99
77-77,76-76
60-84,60-81
10-76,8-11
66-70,66-72
32-96,33-97
22-52,21-96
16-28,15-27
13-81,82-82
58-58,57-59
45-77,38-60
17-57,17-92
34-71,35-76
69-96,68-98
98-99,91-99
16-90,16-91
71-83,71-89
22-24,23-81
28-32,32-33
59-60,52-60
40-97,70-79
54-55,54-56
28-48,49-67
48-68,68-91
28-83,29-87
39-63,63-63
42-59,60-75
25-38,23-46
71-93,72-97
90-98,29-97
63-85,64-90
34-64,33-65
3-99,2-98
69-97,42-77
73-81,73-80
53-54,19-54
8-94,93-93
56-66,62-65
5-7,6-72
45-93,45-96
5-44,43-45
5-73,40-74
41-71,41-70
50-87,84-88
12-93,67-86
63-93,64-92
11-35,10-34
17-91,17-87
36-89,35-88
17-93,17-92
86-88,45-89
7-55,8-56
12-26,12-55
72-73,10-73
42-96,42-97
13-85,14-84
15-17,16-80
5-45,4-97
11-29,10-12
29-29,28-77
82-83,51-83
91-93,13-93
11-91,7-14
68-68,54-69
82-91,81-92
12-36,11-69
58-71,57-62
6-76,5-77
37-38,38-74
50-94,2-95
88-88,74-89
23-54,22-24
57-66,58-67
98-98,86-87
7-45,13-51
3-82,2-4
6-81,5-7
10-71,11-72
12-81,11-92
25-87,87-94
34-92,40-93
18-18,17-66
91-94,58-94
53-92,8-54
36-41,35-42
1-1,3-80
13-13,12-54
26-27,26-85
19-63,10-78
56-69,57-70
3-98,4-99
75-97,98-99
52-92,99-99
44-56,45-76
18-77,77-78
8-65,9-64
50-61,50-65
89-90,10-90
4-61,8-35
84-88,57-99
16-58,17-57
24-36,35-36
72-92,54-93
18-86,19-85
10-87,87-87
12-92,13-93
87-98,69-98
30-70,31-69
2-99,2-78
5-94,18-97
89-93,88-94
17-58,17-18
40-65,28-41
33-60,32-61
6-98,8-98
13-13,12-86
94-95,61-95
21-62,21-25
12-97,11-91
14-17,18-49
26-97,25-98
7-92,91-92
11-13,12-48
20-31,20-82
2-97,3-98
78-98,99-99
28-69,29-70
29-82,81-82
34-80,59-80
81-83,18-82
84-86,85-88
4-9,9-86
85-86,85-87
99-99,14-98
50-97,49-96
56-89,55-90
37-91,38-90
49-49,48-83
26-92,34-65
18-88,17-89
8-9,9-45
3-3,2-78
29-80,30-79
20-95,20-98
45-56,46-55
26-75,27-76
78-79,10-78
7-10,8-73
25-45,25-46
74-91,73-92
31-76,30-77
38-81,11-53
81-91,87-87
1-3,2-99
59-89,59-89
28-93,8-10
38-98,38-96
94-94,7-94
14-93,13-92
46-46,41-47
25-92,92-93
98-98,9-99
84-85,51-85
6-65,5-64
15-63,16-62
62-75,63-74
34-42,35-55
30-34,33-33
8-8,7-96
63-94,93-94
2-69,2-69
44-44,38-45
74-75,39-75
7-57,7-87
41-59,40-88
12-36,12-35
1-2,1-92
4-64,3-65
28-30,27-27
58-68,59-63
14-61,14-61
14-83,84-85
14-94,15-15
49-49,48-48
52-88,8-91
15-50,14-51
26-55,3-55
36-36,24-37
92-93,40-92
22-98,21-98
22-22,21-23
5-97,99-99
23-75,22-69
11-13,12-85
4-6,16-93
30-32,27-33
3-74,31-73
86-86,35-85
37-40,37-49
58-58,57-74
40-80,19-80
6-42,6-42
84-89,31-83
1-82,4-82
66-99,66-99
19-93,20-82
2-99,1-3
17-71,12-17
58-59,45-59
38-92,18-37
15-20,28-79
42-58,43-57
22-46,46-46
15-26,16-78
96-97,1-97
5-29,6-30
9-23,24-72
17-99,17-98
7-55,6-72
8-81,7-9
21-30,29-44
23-98,51-95
49-60,48-59
66-84,49-84
19-82,18-83
35-85,34-84
31-96,97-98
3-96,1-96
4-89,25-75
36-37,36-96
38-47,31-48
2-16,15-16
66-78,66-77
20-94,19-95
93-94,76-94
23-74,24-75
10-33,21-34
75-93,94-97
7-98,8-97
61-82,2-83
25-38,10-39
4-64,5-63
34-34,28-33
13-52,14-79
8-90,9-43
43-69,44-68
2-3,3-50
69-76,68-75
19-82,19-82
19-89,89-90
3-4,3-82
27-95,26-27
41-70,35-40
18-84,19-85
61-74,61-83
10-99,11-98
26-81,27-48
23-83,23-82
35-91,90-96
54-83,82-82
3-9,2-8
33-97,99-99
23-84,24-90
85-85,6-86
55-63,56-80
49-89,49-88
5-89,2-3
31-40,31-72
25-25,24-53
13-97,14-96
26-28,27-91
91-92,15-92
61-82,60-81
64-65,64-71
5-94,5-80
9-95,9-94
29-83,18-93
1-2,3-34
31-32,31-92
9-45,46-86
20-40,39-39
26-71,70-70
3-13,2-73
42-88,19-91
58-59,27-59
2-81,1-80
6-96,5-95
88-89,32-87
73-90,23-74
18-80,17-66
76-88,76-87
17-83,85-92
15-92,11-14
12-46,44-47
11-28,12-27
11-26,14-26
9-94,8-99
12-85,12-86
43-62,63-68
49-81,85-97
52-77,52-78
9-62,49-62
28-92,29-92
79-80,75-80
3-98,2-99
16-87,17-94
16-25,24-29
11-86,85-87
4-6,5-68
9-69,68-68
12-16,13-17
6-54,5-58
74-97,98-99
22-37,36-97
74-95,78-94
25-90,26-89
37-92,74-91
46-48,15-83
14-89,14-88
8-57,56-57
18-34,17-34
37-46,45-46
3-51,10-51
54-60,49-60
78-78,46-79
77-78,31-77
95-96,10-95
26-53,52-53
17-64,2-88
68-79,67-80
40-77,40-78
28-99,99-99
65-96,43-93
86-95,36-85
14-23,22-23
4-80,46-70
3-92,92-92
30-93,30-30
19-27,19-40
29-80,28-80
34-55,33-56
4-90,4-5
49-84,49-83
14-16,15-91
97-99,1-98
4-83,82-84
24-96,25-97
60-61,1-61
23-80,24-42
14-96,14-67
1-2,1-32
41-75,40-74
15-69,70-74
23-77,22-78
41-91,70-87
72-85,24-86
16-64,37-85
17-72,44-72
15-81,80-82
20-39,68-86
20-97,20-97
73-74,70-74
3-48,1-48
48-98,49-75
72-81,73-82
29-42,29-48
14-87,14-88
14-88,14-87
80-80,48-80
98-99,4-99
90-91,8-90
31-86,30-85
24-98,25-25
30-58,18-58
11-77,76-77
78-94,40-77
14-29,29-99
14-97,13-15
9-89,9-88
92-95,91-94
4-94,5-95
20-89,19-90
70-99,60-92
23-69,22-69
3-23,2-93
22-83,19-20
4-30,1-61
18-20,19-82
49-77,47-77
30-52,5-90
56-87,57-88
24-55,1-49
72-90,40-71
16-79,8-89
19-66,20-74
25-92,24-73
2-2,1-93
29-72,29-79
10-92,11-11
96-99,26-95
14-21,14-21
11-13,12-40
5-9,9-94
18-96,96-97
20-91,91-95
16-34,34-35
53-88,52-53
58-93,17-92
3-97,2-99
12-41,13-95
1-92,26-79
10-97,11-98
42-77,76-78
31-86,32-85
8-64,1-7
64-72,50-72
40-98,39-75
1-97,1-98
60-73,61-74
92-93,5-92
23-35,28-70
17-90,24-88
46-46,6-46
24-96,25-25
54-98,77-97
48-91,47-92
28-99,2-96
83-84,5-84
52-61,52-73
21-38,21-93
9-45,34-37
51-83,67-74
26-26,26-88
41-67,40-70
46-55,43-48
24-74,73-73
43-90,42-89
1-81,82-82
10-98,94-97
54-84,53-83
1-38,12-39
48-92,7-49
74-83,56-85
18-35,18-52
82-84,4-83
98-99,1-99
24-71,25-72
13-81,12-14
22-65,11-23
2-62,13-61
17-40,36-40
8-89,5-93
29-73,28-74
21-96,21-95
67-86,66-87
23-83,82-82
72-74,73-86
96-97,17-97
5-7,6-79
23-54,22-55`;
export const day3 = `dWlhclDHdFvDCCDfFq
mGdZBZBwRGjZMFgvTvgtvv
jwwJrzdzGdSbGGnNlzWczHzPHPhn
cczcbMBszhzzDBTBPPPGjtvtlt
LqJLfpwdLnvQLRGQjGtj
gSgnSJJCGSGpGSrwgfhchmmmHzcrHDmbrmMm
bVjstCsSstCLCrbSLnMpdMndcLddcqcpHR
wPZJQJwtBfJZmgBwPTcpTdcnfHMppcGMdG
gmFJzwPJJtszvNhCNC
DmjZDMZWDqGRqqRpHmmRLTTNTPTfCQJQQLJHTClc
FtzfvrfFwVgtzztgBLJNcNlTcTVNNQLN
vgsdbzzrwtqWfWRpZDdZ
rJhqRhLHhdcQqdHqfQGfPGstgGPlWttM
DzCpDDmnNCmBZBZnVBmZzBGPfsbglfNPwgPGPMWsWWft
BZFnlmpBpBzDzVZmhFHFrrrchhRqTdrc
DWCCWFNqdGFdPVcb
HllttQsTRlJlsblrHlhdmPLVcVcTccndLvPLmL
HSlstHgJltghhRrzNBNDzSwMjNZwNb
dzGSHCWSsGVVSdHVHHWWVVDCgJDpQqLTTRJpgmTLRmJTTpTR
BvNjMPZMBtBBMvvNMNttlhLQqCJpLmhTRQqQJgRJLQQg
llNncBlMCwwMnwPZrGsVHzcfFGdHGFGs
JfZhphMMQmFzDTDjSdrQjQ
sqHCbCwBVtbqbCqtrWdjzlSJTlrTSWBn
bHcwbGCGRssNscwtHNbwvmRFvpFFJFvLZMmPLFfv
qBCrzznVmDCmMMDNgrgcrvHHcgbQcW
TTTsdJRTRhhlsgbvbdCFdbWvbQ
JhGGlfRlJsnCMDMqjmfV
rqLLvDLtStDLQhQDQrQhhNdsmWdmmjjnssPnTMnTzfTsWT
ZRFFpgCgppcBcnjTsjTMTfPFMP
GCZpGlwJwBgGHcJhSSHLDDrNqrMtNq
FsPFqsDNZFNnZrcBmWfWWQ
lSnRlRTvgrWtctTmft
SMbGbbvnGlnSDwGqLwNCqNVD
dPQDcBwJJDgDTPgGgQTBVjSsmLhLTrLmjSLpjSLh
MvvZRHtMtbCNvCNCNtNvbRfBSMSrjmLpjnjmVhrVSLsnnmSh
qHZtbBZfRztbHbCzNRHPQgJPJgGgglFPPFqdQD
MsBsVDspRPfPlhMl
zWnCFzHbSCwqNmPSjmGlsmfN
FnHnFbFzsHHCCgzCzbBptVppgvvVgVrpBrJt
pTLntptZjQLfVDjQTDlVJCSWNCPSCCsSNmFlNslm
BBHbqGHHqgwSWSCCWwZWWZ
qRzbhhbzzrHdRRHhRHvzZjfrVTrppVQttDfcQTfp
DHsdHPHHsHMsRmhMZZQBtljgZGtC
NFnCbFznLVJbVrjhQthjGBLZBjGL
wNrfFJJbCpNnfbdwDSDHsvsHmsmH
jLZRjnMMjJhJnvtQbdHfHZbvHQ
mBzwptCWlcFCwsHSTpQfQHQfrpTb
mNltzmsCNmFzGwCBllGRgRgqjgLMnGqjnPjV
ZqqcqmVVtbcBMFfFMcQfgphJ
HLWLDvWjjLwTWzzvGLThQQshQllgJDJgfbffJQ
vHzLvrwwzGzTRGzzLLRPRwRdSVdnBBdSbBSVStbNmnrmZS
TWVVvPSgwWSqcRgRwbRRcqshsfFzzzChTGNHzHhhhCsG
njZrjMLlpmDmGfSGtrNttzCF
ZQBmZdDBZRRPRSBgcb
TpntvdpnZDptnbnTDGtSFSlFmzCzzmSFRjqlZj
MWrNcWRMlgqzMjzq
NPwsPNrBNcVHNNcJHBNBcJwwttDvGVnDptVRtbnTtGvVGtGG
tsbbvvSfnqvzQLLBjfMLdd
gJRmRNmJNchgmmrFJhFgWJQMwBnjwrMBVQwQTBdLdVQj
GcGpGGRGJgqstvpbnCqb
rsHcrbZHBTTtLtNSwwHLLJ
mFqhWVsjsVCjQlNJGMwMlMMGMh
QggzffQRCfgVFWzzCQffqfZpZDcRvTTBTvvZnsdnddcn
bPFMFFBpMlFfMZMpHGNSrNctJcPSSchJchPt
zCgwnmgzQDnQgdWWQRgqSrqLSqSgssLNJhgJ
rQCQQTrRRmDBFfbHBFHZbT
fzfPQsGrrMMjtHtBHs
SwNNDqwhWpVTwbDGGDmwSVhZRZHdbCtgBjCRjMtbBHtRMd
vVTGvVGNvPPvQvfncJ
cwzMJbclHDPqfJQPfq
rrqjjTBrqqBjRCgTjrRjNrsGPDhDFGCfWGfPFfFPGWfD
BZTTSTZgjbSwVptvpq
PPPPJpvpJsJwPHHPsJdTNZRZZZjTFFmRRRNjZd
qbWVfChDCDnVVDGfnSFNNjRLmNfBNLQjLjmBRm
DhFDhbnWCDhGcbJPPwrsrMwrvlvc
lFSDTwHTSwlTNwFFlwNcFFpjLZvZqvnqLPnnWbgngbbncqbZ
rzQfMzRGrRGJCffBMGdGsJZWWnqWVqdPPgNvvVZWPWWn
RJrttBtNQCsNzTpShhHFDwFlth
QNzQFjNFrQPNbmPpqTTDGswWmB
ggHRcSlcCVCSzMVqDGwgqTWpsmqwqG
cltzCZtLClHRRtMZZLQjfNvtrJfhvrddvNNd
mcfWHffBFnQRQlTFdv
wssSLVbbzDVbzbggzSzNshNMnvnljRdvQRlMBjvQdnCj
bhDzVSSJDDJhDLBwtbDzzbbWppfpcmWGmprqqGtqprcHPp
rpVFrZpgHWSZrFPqhzwcqPwmcVBD
vMTnQJjQLCbljvvQzTMbTjPNdBLwwDhmhNNqPwmmhhBh
jvGjjQJnrspGHgFz
sjssjtZlcphZHwWvcrHTwWJH
qDdzzrFNNNDGdFDzzVBVVvfWJPfgPmgWPgvwVH
nqMQGDrnLGnqqLNqjtCZZjsMhZhCMbtl
JJJsLFmzsrFlSpzPscjgHhnRnmvcjqRvvj
fCMQbCbTjjqTGhjc
bfdbWdCddfBbtCfbfbqVWQQpPlBrJLJJSSLwppFssFzLzp
pdbbzlffWtJbgQwhcphQcCCg
vHvLFvVLvSfFRLnRFRNHjPjggcssQcjjsnwhsPCC
vGVGGFFVHLTvDRHDmBbTzfZWMdJZlfMm
wjCbjQgjTQhNNzgWQCWrDFMZmZDZDCrrMDpLpL
czGSPznnRGGJGGlVVRVBGGlBmDDcMDFDDZLqfffZFrrZqFpZ
JPGlvBSJHVGnVsjvQjjzwdwjzd
MFlWQHDTpnpsFNNQllWFWlhzjGgrgDzGGhGGjvmZDZrh
PtTPcTLbBCVPTRVcvhjmmhVhSZGGgvZg
JLPfCwPbTbBPJCfblplMpqWsMpMwWHQn
QbHVBBzWtzHBNtBwQSgqhqSbFgRLjhmqqj
ZnCnMcdsDnJTncggFJwRmSwgRFmL
sTMZpGDvsZcMpcvTCPHwzrfzrpzHpWBrWz
PMdJWwJWHFWJnNzbDlfbCfMvbl
rZgttrFptFFcBtccbbCDvgfbGCGGgGDz
QsZBmsrFscrVrjQJjJQRJWWLwq
GwNNJwwRThwrWfhh
SmQqmzsjHssQzCbvsmSSzsQTjWpFTTfFfThchhFTBBfppB
mmbHbmtmCzzQZzQRdZJhNMdMlRMglh
rrsPbncQvvgnnrTdGDVcCdpZHHZp
RwwwhjLLqtJFwjzwtwmwwGpDZVdGDVdZBZDFHdHZCp
zhzwLhhfffLtjNChgWbbrbnMvPrMrrfv
tQMtQtTSBFtSmQSttMggMtbtnTnPrZvrnzNNTGZvrZZdLdnL
HqhwDpDcwlHqpVrrFzvFGpZrrzrP
RwlhhjwRCjVfjDbMtFWBWJMgWjWm
WpWVlWzsGlBJpspNclNlhhhmgzrdtzQMQttzMmtt
RfnPRLTPDHRdPbwvvntnSrFgmvnmtm
CwqRDCCwqCwbCTqJcJBNcZqdVcBlpJ
tpfnNBsGGNRppRCgfgRRCRQJGMPPWdwMJdWFFwjVzGPJ
chLSchLTbLqvqcZLlvvLqbmldMzFFWdzVSFWFMzQVJwjQjdM
rLqqcjDrcvhRsDfHDtNNnN
DjZjvTTDqrtTZZSMcdRdmRJrcJNc
HWgPGVhFPgnSVtnJcdMs
FPLfBwCWGPfCwfLHCCDBZlbDpBjvqTtDzzDj
FJNqNFgNFssqGGqBsTlMVcgVrCwLwlhcrw
fRZzDmDZvvDdZbtdpDZmbrThrLMCvcChwwlSTrvMSr
zmfZmtZmpDmbfWRDDZdqFljqnNQjGWnsjFqGsG
rMdMWddmJmvdSdmWfWMddpVRqRFVHRRqMRRPQMRqRq
tDGtGGhLjLLZNLjjNgNthGtqHTVqRVVpPDRpHHVRQVRPPR
ZlLtzNjgsZZlssLgtjNpfWfJvlJrrvCJfBmBfn
hqpWvFJsJFNHhqMWNhWvWRmmDcDMLcwZnjcwnjRnjn
LdrlgCCrSSTrTnwRjmwRQZwdwG
PVlfClrLlLlfggtBPzHHhHFbWzJNbvqJFNqF
TbbQtnDtbGGjGlGsGHpJJmFWFJJrBWWFlWrS
CZzzNzzhddNchhMhhRVjpCBwBrCvJvpmSCvrwJ
fhZZhddRjRgZzMZRzPjPTsLGQtHLTHTbDPQTtqPT
nHnWsQNQQWTWQshwjBJJJmHwFBwm
VZZpfbffZVvbSbGfBhSwmtmmJlmjJFJJ
bpphpMfMvMzDbMGZgQNrrngzdTsNqWdd
VPNddVTPPmdnVcPVZcdTmcDbQTFjMpjtFzbMtFjzsFTssT
lJCllWCrgvRlgwlJfRRvSzjSjQpbzMHpbwMQpszM
fRhGBBJJCgrNLsNPNVVhNq
pLrVDgbNbjVplpsltHBqWSqhSQcHDttH
MCdCwCGTmnTmmmvTTCwCqNhHQhRWcwHWBRHSqSQH
TNTFFPfffTvFTJvTPCPTFfGdzVjspVLZglJbsbZpVblrzjlb
cdPzFrldgcdCrnlznPzrBNRssLLBbVNVZsLHRHdm
wTQQwvvtqwqcGvTZmVHBbVLLBbRV
GWJSGfJWcjQwhQQWjqJhhGfgpMnMzDnpMlPpMnDlMrzl
pMhqTTsSpdBPpNBshsdMMTQFvFlQtQWCRQlCllVFqVqG
dfcbnmrnjzRFvGQQGvfv
mDrjLLLcJjLhpZSSJMdpph
NGZNwqFqZhhcFSCfRzwdzRfCzVRw
QTTmBTsWQWJPPCvzvpHPzdvVFR
bsmWTBbQDbmbLQQMsWWQchgqLqhGGGGZLhSFjhqS
HgmGlgsvBBDgBGCdHHvHwCGwhZJWhTjSdhTSFFFhJtSJTJhT
RQfVrfQNszMQfpMzpNnfLbtjhtSbWJWFWtFFtFJtFSZq
PNzLfnLnBCPHgsgC
mTZGgCdNSNmCQLLpPnDhRlGhpV
vWJHWFsfHMWBBFbBsjfjHrFfLRRLPPnpLthttRVPLSnhSPbS
fzMrBjWfBrzsZCZmSTgQzcNN
mgmCZCMgmnZmZgBZpgpJfbQfwSQPDTdfdwSDfwhn
sHhcrWLcFlzHcHRNNFvNFcFPwDDTWdddDdqWbSTWDPTTQS
RNsslsRrNcRNvNRFFNvVsghZBJtVCCtCtGghjhGBGG
gchrcRRdnRwPPnvQ
CVCCSrDjFHjVDbBLFGGBSvwnwNMnMsPPNsNPvwPQVM
lHLCTHGDCbbjFTTzdWlpcqfgcrdzZg
fRDPsDsqqJttttJSzPDgJWQCbQQbGMWCCnGGPVGVQQ
rTTBvZhrvBnWWDWCbZWW
cwLlTLpjTwBFLLhgfRRfmRqRDmRdjq
sprGGPTrJTsGPzszqGzNtTtpfbQddQSQSDFDFvvbZvwFbbfN
LWWCMVmwMmgWFQfFDDvZDgdF
mlMmRVCWVMmmHRjVCmjHWRhMzpTtlrlPzrtzwlsGPrpwtrJp
tsfwwfjfdfrtrClfvwvvLnTHNmvLHcNccRNcvNWH
qQSqZqFQRBzghDFncHgmccHNmWcNmM
SQJphFJzRDSsdpVlllrCrw
vGQqLQFvBvLvdNnvjnvNDc
TRJwmWmZWlCCmzznbNhhbDhRgj
CCTtDTlmDTWTmDmZZlVLLsFfstfFFLsBLQfF
cfWflMmWWlWfPWBhBlQtLmmvrrrvCLjvRTjLLwwr
gSgbsbgHdsjzHbqbdVDLZLvTZwLTvSrZrFvZLw
sdbJqDNdjJNdsJBpBWpJlMcfcB
FHlMHPqDLlPctgHSnttCSC
zhrmBrTwJTjBmQcSQvQqbtwGvg
jBjmBmJjjjRZTBzhhrBJLDdZqfpDMdfWWlDDLMlV
zPVdbsBzZdwqJGhrLTvNNJqH
tmmCgCPCDDnptHDjNvGvhrDvLv
pRWRlpSpPllClnpbQVQwFFVSQFVBZz
nDrCvmvMnMSmsCvblBzzCZplbJlTbZ
FNRtFWRfcGqFGQbzlZTQqQTBbd
GRwFfNtwFRNFGMvBsnnwMMMBjn
LVTBjjlJCDrnJzJNQR
GsGGsggGpfhgpchgdqzbMzzhzQRnnMRrNzzR
PwWFqFGpwWpdWgfsGggdmjCVHPHlCCCVZNCjVmVj
qVTsCWwbCsPlCVfcbvfPDgLzbzDDhrzRrjgZghgr
ntmHmNpSQNGtntNttmSdSdBdjrrDLQZQLLhRrFFFRDTFZhDF
mtMtBNTSNBpNJStMGSdHppNcVWPsWvqVcsVJfwwqlqWqlc
vvWzLvvdpZDvhTpcrLcTTLpdwSPnCfJwCMnQSMwSnCGJrnwr
ttHVmVNNsHBBRsHbMMwwnjnjBfjJwCMP
tsVllgNVqbRlfplldDvDWT
mLjLsQqLQqsBRvvlRBLRlT
bhgtDDhCtmptmTTS
nfmdbggwGWrfsPzfWq
JpWDcSGJpGzsHPSSlbbd
wVRqVZwwRwPDwbDddH
VtVVVLthLVtVgfQLRTNtqDcCcJBmmWMWWprpFrcBJWNp
dhhhDtmLdttdPlslGlRFjfzBBpzzRpGJ
QMrVMwbVrrbvVVCrvcnqQQrrSMBJfpjFSzfjJFMFRWSpjjFG
cwvbHHbCqVchRDHgDsPTdt
CgVNCtDsDtJGZZGqMMGhDq
cLRnSHgWcRdLHWSSRLjQdlHBTTPcPwwhzqzTMBPTwhPPwP
HnnnglnWWgdRjlmQNsNFmJCFJFvsJsNN
hfccLbjhfSRbfDZjFRJzrlvlwwlnnFrWwzqr
TCsPLNtQdpdQQVtVNvJNJWlzJzwlrvJl
pHtPsPtPtCQfbRHHDHhMLh
nWRWgLtWnfTcZNNsscfd
JMGzMVJwMVTvzVQFGHMMmPdddsPsCjldlHPcScNPsP
vGrMQQmmvTQzMJpghWRWgpbbBqLbLR
WSbhFbPTpRfTfPdhpfbhSbfPQLzlQlzlHvtQsvlltlsgHdgQ
pZcGJDZNGcVrJwrDrrnvtNvlNzsgtgzvvsgt
qmJZZJcBqwrMJcVbWfSPPWpmpjmSCF
jHVjjCcpNrDgjsfB
ndqllRvJQtqlQQTRWllFNDrsMZBfDBLvNMNDfsbZ
qTFnWJqdWRdqWRlnTRnQGnTmwwSHCzpcGNmHNcPVcHGmCz
pZCpBhDfvgBVZQGMMVZVlq
sLsLTTSssjPnTNbFGRGFPVHqMMRF
TsNSccnjLdcsLjdmjWvWvBhfmvWpCGhGhD
VWFFFPMpPVSMbTppHTnHTbRH
DtvfNdBNddDNSLjsvDTTHnzzHwrTrwsrwqbT
dgBLNffdgjjtfBQSvgNjNDlvMcQJmJJmZCMmVVVZFPFcPMGG
VWsQLHMVVSNRShWLhNSNLjbbbddbpDZDddcbZdDRztpd
FPlhhgPvThGFJndnnCCnJzzdCp
qrTfmllGvfvGqwNMMMsffsQsNh
NsmFqNlmnQRbCFsmJgSffpPcbvSfrVvpgS
LhZGDZhhwtDHMwDdHGhDjDpTzzPdzgTvcPvpSSpPrdrv
jgHMjBLhwtZMHMHmJNNJNFlBqlBJNn
bznSQggscgMcSTTfJbSQzQFwClMhmCmthClvMwFLwhZL
BRWBPBVVPjPNVHpVqlqrvtwFqmmLqltZmL
WDVddNHNvRgccgsDsgbT
sNgnQLtLLLPPnsPpqdqjBclpGWjcWjBG
rVCChSZhVrrwqVDVHSHmMjldGfJGfHddJGJlfGjGJj
CVZmDvZCmmhFVVrCgTNbbnQFgbsqNqNQ
WmMmSSfJNRRPfJRMRMtllCgdStgbgttgCdDd
QGBrvzwBczlgqCtDbvDq
QQpBGFrLQjQzGVVRNjPmNNWMbW
gGljnJhnJtllpNVCHWcccdTdjdmB
bLfSQDSMSHmBnwCB
LFMDrbFfFQZQRzLZnbgtlsRGtltpgNhgPpPG
cRThZZchCThtgTRhZTRtjWFjWNwqCjGmwFjqqffC
DPDPGzPMHDbrpqjfwrjqmjmp
JVHHDdVdVbvGMdnVdQVdDbHcRZllhRtgStRLThRSTcBTvc
lQWPSBrrPZGgPglGssDfHnWsfDFHHvHh
TDCqpttptJNLtwNpbwTqzqHshsvsMMFnmHMNfssmvmvf
JCjqVpDtrBjQjrlj
wFGWGpFLvCczNSWWsz
tlfgtftjlbtHHlDBsBzmQQnsQDQsCn
gjfrsVqVgPlfqhvLdvdwZhGq
pHpZHBSvRvRCBBZCTMngRnWndnRmWcgg
jsfrfrjJFDwDDMMggMCGWGcfmG
qbCszCjtCjQsQrtZVBHBHvBvqLZvlp
scFzsPScNgNPNgQzpttlCBCwpLrMLCrDdljLwq
TjfGZZjVwMZwMLwr
vnGbWTvTmFRjQFQPsb
bVLrzqrzJVgJbbtVrWJVgppcBCzBvdzwBCCBHDcBvc
hflPQnMQmQSRlQMPNRTHwwHHHqpHpdfwdBCp
hFhZMhqSNMNbrZgWWGWJjZ
NJsgNjJlMHQrwnRgSRPwrP
tqpQtTFpFvbGpzTTWSrnSbrhwChCnRfrCf
GtcvGqQpttzcqdFzWppDsZMJjBBsBJcBNmBjMsLJ
lGfZGZhFfhdSWqmFFWSS
wDRDPLcDnjtWbSmqrSCSLC
MPwmtVnVMjztznHPgQhQfJfvvHHGggQZ
llTspLllCHmLHHndldqHdlLQQPSBQczZSFDDQZSNGcGG
jMhwvVrRjbRhFBZNGPcGNN
wVtrrtRwrfrwftjVjwWvMrRpsqsnsHsBglslCmTsdWdHTd
vPvmTGgDPRvGpDPGPqGHQnWJQJMBBzJBlBQWlHWl
bfbwNsmwFdLjbfrrLsSfLNQtMllznBzJQZMQtMlZZnnF
frssSscssNfScCjfSCwjsDmRDpGmDRDvvvVcvRDvRp
LtlPZPjBTbWsWJVJVzdT
nnprqhrqmzfrSrphqfCChVVGVDJWgSHHWgWsRDVHWd
nrmppNqhcCrfMchcMCncqbzPZvlvlwbBNjPjtNjZjL
FPWsFdSspVbbbtWVvl
CCHnnfHHvCwtVMhzlzDllC
LrGnjGfgfvcwfgrLrBjrBLgwdBTSRBFsRZdRsSqFFSFSSPPp
whGCLqsrjgGhhGFqrCCFGCGzTRTZJcNnzlLTnznNHcnzTH
ddvVmbfvdvVbDVQdvvdSzpNcnJzlzSRHNJpnJcSc
BPdvfQdWtPDDPfDvDQVVPmbhssCGGMqgFCFMqGMWgMjrRw
PSLbGmWPSPLQbMTPWGFWltthdDdrmBDHhdDdczzDRh
VfCngVfgsZwCftrZdhcZrdNDzz
CjVJJJqnJwQhWPPLQlGj
ntnnQmTQTQGVWGNGNNlClG
jDffjMSvqjHzHHzwNVwNVcCddPVNdD
ZszJsrrZMjsHqqvZJLRQCbTRQbJmThbt
BgLHgFDsJNWgQgflWd
mnVVcCHnCGRcVnZSjmlthftMQddlfhQctNfW
qbSGqmHSTFprvpvTTL
dvdTMvvpdLpTcSLvdLLMmhfFBftwCNhRwRNjtCTRCf
lshQWgsgrHHqlFfRqFjRFfFwCB
rsgHQbJbrsGHHlgQHgJrlHrPZdhdpMZGDSDpdPLcZhdvhZ`;
