Search.setIndex({"docnames": ["assignments/hw0/hw0", "assignments/hw1/hw1", "index", "lectures/01_distributions", "lectures/02_contingency_tables", "lectures/03_logreg", "lectures/04_expfam", "lectures/05_glms", "lectures/99_references"], "filenames": ["assignments/hw0/hw0.ipynb", "assignments/hw1/hw1.ipynb", "index.md", "lectures/01_distributions.ipynb", "lectures/02_contingency_tables.md", "lectures/03_logreg.md", "lectures/04_expfam.md", "lectures/05_glms.md", "lectures/99_references.md"], "titles": ["HW0: PyTorch Primer", "HW1: Logistic Regression", "Overview", "Discrete Distributions and the Basics of Statistical Inference", "Contingency Tables", "Logistic Regression", "Exponential Families", "Generalized Linear Models", "References"], "terms": {"stats305b": [0, 1, 3], "stanford": [0, 2], "univers": [0, 2, 8], "winter": [0, 2], "2024": [0, 2, 3], "your": [0, 5, 7], "name": [0, 3], "collabor": 0, "hour": [0, 2, 3], "spent": 0, "pleas": [0, 1, 3], "let": [0, 1, 3, 4, 5, 6, 7], "us": [0, 1, 3, 4, 5, 6, 7, 8], "know": [0, 3, 4, 5], "how": [0, 3, 4, 5, 6], "mani": [0, 3, 5, 6, 7], "total": [0, 3, 4, 5], "you": [0, 1, 2, 3, 4, 5, 6], "thi": [0, 1, 2, 3, 4, 5, 6, 7], "assign": [0, 3], "so": [0, 2, 3, 4, 5, 7], "we": [0, 1, 2, 3, 4, 5, 6, 7], "can": [0, 1, 3, 4, 5, 6, 7], "calibr": 0, "futur": 0, "feedback": 0, "alwai": [0, 3], "welcom": [0, 2], "ll": [0, 1, 2, 3, 4, 5, 6, 7], "python": [0, 2, 3], "cours": [0, 1, 2, 3, 4, 5, 6], "lab": 0, "help": [0, 2], "get": [0, 1, 2, 3, 4], "up": [0, 2, 3, 6], "speed": [0, 2], "It": [0, 3, 4, 5, 6, 7], "introduc": [0, 3, 4], "s": [0, 2, 3, 6, 7], "equival": [0, 3, 4, 5], "numpi": 0, "arrai": 0, "bell": 0, "whistl": 0, "run": [0, 1, 3, 5], "gpu": 0, "support": [0, 1, 3], "automat": [0, 1], "differenti": [0, 1, 3, 5], "If": [0, 1, 3, 4, 5, 6], "re": [0, 1, 3], "come": [0, 1, 5], "from": [0, 1, 2, 3, 4, 5, 6, 7], "matlab": 0, "probabl": [0, 1, 2, 3, 4, 5, 6, 7, 8], "avoid": 0, "costli": 0, "loop": 0, "comput": [0, 1, 3, 4, 6], "over": [0, 3, 5, 7], "dimens": 0, "an": [0, 1, 2, 3, 4, 5, 6, 7], "here": [0, 1, 3, 4, 5, 6, 7], "trick": 0, "ha": [0, 3, 5, 6, 7], "excel": 0, "librari": 0, "sampl": [0, 3, 6, 7], "evalu": [0, 3, 4, 5, 6, 7], "log": [0, 1, 3, 7], "much": [0, 3, 5], "import": [0, 1, 3, 4], "dist": 0, "matplotlib": [0, 1, 3], "pyplot": [0, 1, 3], "plt": [0, 1, 3], "ar": [0, 1, 3, 4, 5, 6, 7], "The": [0, 2, 3, 4, 5, 7], "document": 0, "alreadi": [0, 5], "great": 0, "tutori": 0, "rather": [0, 3, 4], "than": [0, 2, 3, 4, 6, 7], "recreat": 0, "wheel": 0, "start": [0, 1, 3, 4, 5, 6], "read": [0, 2], "onc": [0, 7], "ve": [0, 1, 3, 6, 7], "through": [0, 5, 7], "try": [0, 3, 5], "function": [0, 3, 4, 5, 6, 7, 8], "like": [0, 2, 3, 4, 5, 6, 7], "arang": [0, 3], "reshap": 0, "etc": [0, 4, 5, 6], "follow": [0, 1, 2, 3, 4, 5], "0": [0, 2, 3, 4, 5, 6, 7], "8": [0, 1, 2, 3], "note": [0, 1, 3, 4, 6], "For": [0, 3, 4, 5, 6, 7], "ones": [0, 6], "below": [0, 1, 4, 5, 6], "don": [0, 4, 5], "t": [0, 1, 3, 4, 5, 6, 7], "liter": 0, "specifi": [0, 3, 5], "list": [0, 1], "code": [0, 1, 2], "sequenc": [0, 6], "repeat": 0, "doe": [0, 1, 4, 5], "arbitrari": [0, 5, 7], "number": [0, 1, 3, 5, 7], "life": [0, 3], "easier": 0, "faster": [0, 5], "hang": 0, "x": [0, 1, 3, 4, 5, 6, 7], "where": [0, 1, 3, 4, 5, 6, 7], "i": [0, 1, 2, 3, 4, 5, 6, 7], "j": [0, 3, 4, 5, 6, 7], "sum": [0, 3, 4, 5, 6, 7], "two": [0, 1, 3, 6, 7], "dimension": [0, 3, 6], "exampl": [0, 7], "distanc": [0, 6], "matrix": [0, 1, 4, 5, 6, 7], "d": [0, 3, 5, 6, 7, 8], "euclidean": 0, "between": [0, 3, 4, 5, 6, 7], "10": [0, 1, 2, 3, 4, 8], "dtype": [0, 3], "float": 0, "answer": [0, 1, 7], "should": [0, 2, 3, 4, 5, 7], "0000": 0, "8284": 0, "6569": 0, "4853": 0, "11": [0, 2, 3, 4], "3137": 0, "extract": 0, "submatrix": 0, "row": [0, 1, 3, 4, 5], "column": [0, 1, 3, 4], "A": [0, 1, 4, 6, 7, 8], "25": [0, 3], "14": [0, 1, 2, 3], "15": [0, 2, 4], "16": 0, "19": [0, 2, 3], "creat": 0, "binari": [0, 4, 5, 8], "mask": 0, "m": [0, 2, 4], "same": [0, 1, 3, 4, 5, 6, 7], "true": [0, 1, 3, 4, 6, 7], "onli": [0, 1, 3, 4, 5, 6, 7], "divis": [0, 1, 3], "fals": [0, 1, 3], "add": [0, 3, 5, 7], "one": [0, 1, 2, 3, 4, 6, 7], "entri": [0, 3], "after": [0, 5], "updat": [0, 3, 5, 7], "place": [0, 4], "9": [0, 1, 2, 3, 4, 5], "12": [0, 2], "13": [0, 1, 2, 3], "17": [0, 2], "18": 0, "20": [0, 2, 3], "22": [0, 2, 3], "23": [0, 4, 8], "24": [0, 2, 8], "doc": [0, 3], "object": [0, 5], "fit": [0, 1], "poisson": [0, 7], "mixtur": 0, "model": [0, 2, 4, 6, 8], "draw": [0, 2, 3, 4], "50": 0, "rate": [0, 1, 3], "One": [0, 4, 5, 6, 7], "awesom": 0, "thing": [0, 5], "about": [0, 1, 2, 3, 4, 6], "thei": [0, 2, 3, 4, 5, 7], "too": [0, 3, 5], "p": [0, 1, 3, 4, 5, 6, 7, 8], "equal": [0, 2, 3, 4, 5, 6, 7], "mathrm": [0, 1, 3, 4, 5, 6, 7], "poi": 0, "lambda": [0, 3, 4, 6], "ldot": [0, 1, 3, 4, 5, 6, 7], "3679": 0, "1839": 0, "0613": 0, "0153": 0, "1353": 0, "2707": 0, "1804": 0, "0902": 0, "0498": 0, "1494": 0, "2240": 0, "1680": 0, "0183": 0, "0733": 0, "1465": 0, "1954": 0, "point": [0, 1, 3, 5, 7], "under": [0, 1, 3, 4, 5, 6], "gamma": [0, 1, 5, 8], "aka": [0, 5, 6], "concentr": 0, "invers": [0, 3, 4, 5, 6, 7], "scale": [0, 3, 4], "0336": 0, "5905": 0, "0540": 0, "1000": [0, 3], "begin": [0, 1, 3, 4, 5, 6, 7], "align": [0, 1, 3, 4, 5, 6, 7], "frac": [0, 1, 3, 4, 5, 6, 7], "end": [0, 1, 2, 3, 4, 5, 6, 7], "hist": [0, 3], "normal": [0, 4, 5, 7], "histogram": [0, 1, 3], "data": [0, 2, 3, 4, 5, 6, 7, 8], "batch": 0, "100": [0, 5], "independ": [0, 1, 3, 5], "standard": [0, 3, 4, 5, 7], "random": [0, 3, 4, 5, 6], "variabl": [0, 2, 3, 4, 5, 6, 7, 8], "varianc": [0, 3, 4, 5, 7], "mean": [0, 1, 2, 3, 5, 7], "process": [0, 1, 3], "remov": 0, "bug": 0, "program": [0, 3], "must": [0, 4, 6], "put": [0, 5], "them": [0, 2, 4, 5], "edsger": 0, "dijkstra": 0, "skill": 0, "appli": [0, 2, 5, 6, 7], "statist": [0, 2, 4, 6, 7, 8], "hone": 0, "class": [0, 1, 2, 3, 5, 6, 7], "exercis": 0, "tool": [0, 1, 4], "techniqu": [0, 2, 5, 7], "In": [0, 1, 2, 3, 4, 5, 6, 7], "particular": [0, 4, 5, 6], "focu": [0, 2, 3, 4, 7], "give": [0, 1, 3, 5, 6, 7], "some": [0, 3, 4, 5], "directli": [0, 4, 6], "interrog": 0, "what": [0, 1, 2, 3, 4, 5], "happen": 0, "snippet": 0, "hopefulli": 0, "learn": [0, 2], "understand": [0, 4], "go": [0, 5], "given": [0, 3, 4, 5, 6, 7], "replac": 0, "feeling": 0, "powerless": 0, "when": [0, 1, 3, 4, 5, 6, 7], "encount": 0, "inscrut": 0, "confid": [0, 5, 6], "masteri": 0, "knowledg": 0, "effect": [0, 1, 5], "aris": 0, "error": [0, 3, 4, 5], "grammar": 0, "wai": [0, 1, 2, 7], "make": [0, 1, 3], "sens": [0, 1, 7], "base": [0, 3, 4, 6], "english": 0, "sai": [0, 3, 4, 5, 6], "enjoi": 0, "beauti": [0, 6], "park": 0, "becaus": [0, 2, 6], "have": [0, 1, 2, 3, 4, 5, 6, 7], "adject": 0, "verb": 0, "belong": [0, 6], "similar": [0, 3, 7], "evalaut": 0, "express": [0, 3, 4, 5, 6, 7], "oper": 0, "differ": [0, 1, 3, 4, 5, 6, 7], "action": 0, "int": [0, 3, 4, 6], "unfamiliar": 0, "write": [0, 1, 3, 5, 6], "instead": [0, 3, 4, 5, 6], "throw": 0, "spaghetti": 0, "wall": 0, "see": [0, 1, 3, 4, 5, 6, 7], "stick": 0, "better": [0, 1, 5], "ask": [0, 3], "its": [0, 3, 4, 5, 6], "applic": 0, "well": [0, 2, 3, 4, 5, 6], "attribut": 0, "approach": [0, 3, 4, 5, 7], "might": [0, 4, 5, 6], "new": [0, 3, 4], "friend": 0, "person": [0, 4], "would": [0, 3], "randomli": [0, 7], "guess": [0, 3, 7], "explicitli": [0, 5], "question": [0, 1, 7], "todo": 0, "intuit": [0, 1, 3, 5], "reason": [0, 3, 4], "why": [0, 1, 5], "other": [0, 1, 2, 3, 4, 5, 6, 7, 8], "call": [0, 2, 3, 4, 5, 6, 7], "abov": [0, 1, 3, 4, 5, 6, 7], "three": [0, 3], "describ": [0, 1], "notic": 0, "each": [0, 1, 2, 3, 4, 5, 6], "out": [0, 1, 4, 5, 7], "method": [0, 2, 7, 8], "behavior": [0, 3], "expect": [0, 3, 4, 5, 6, 7], "denot": [0, 1, 3, 4, 5, 6], "magic": 0, "command": [0, 1], "which": [0, 1, 3, 4, 5, 6, 7], "open": 0, "ad": 0, "ipython": 0, "short": [0, 3], "interact": 0, "backbon": 0, "jupyt": [0, 1, 3], "notebook": [0, 1], "colab": 0, "cell": [0, 1, 4], "return": [0, 3, 5], "veri": [0, 4, 5], "next": [0, 3, 4, 5, 7], "just": [0, 1, 2, 3, 4, 5, 7], "shft": 0, "enter": 0, "debugg": 0, "wa": [0, 1, 3, 7], "rais": 0, "Then": [0, 1, 2, 3, 4, 5], "investig": 0, "valu": [0, 1, 3, 4, 5], "were": [0, 3, 4], "befor": [0, 3, 5, 6], "line": [0, 1, 3, 5], "led": 0, "crash": 0, "navig": 0, "ipd": 0, "consol": 0, "find": [0, 1, 3, 5, 8], "both": [0, 2, 3, 4, 7], "tensor_a": 0, "tensor_b": 0, "explain": [0, 1], "work": [0, 1, 4, 5, 6, 7], "exit": 0, "quit": 0, "buggi": 0, "randn": 0, "result": [0, 1, 4, 6, 7], "sometim": [0, 4], "subtl": 0, "either": 0, "caus": [0, 4], "ani": [0, 1, 4, 5, 6, 7], "messag": 0, "situat": 0, "anywher": 0, "confirm": 0, "still": [0, 6], "print": [0, 1, 3], "synthet": 0, "practic": [0, 3, 8], "gener": [0, 2, 3, 4, 5, 6, 8], "manual_se": [0, 3], "305": [0, 3], "n": [0, 1, 3, 4, 5, 6, 7, 8], "100_000": 0, "hstack": 0, "beta_tru": 0, "y": [0, 1, 3, 4, 5, 6, 7], "set": [0, 1, 3, 4, 5, 6, 7], "logist": [0, 8], "loss_fn": 0, "nn": 0, "mseloss": 0, "beta_hat": 0, "requires_grad": 0, "learning_r": 0, "num_iter": 0, "loss": [0, 5], "gradient": [0, 4, 7], "descent": [0, 8], "rang": [0, 2, 3, 5], "forward": 0, "pass": 0, "y_pred": 0, "append": 0, "item": 0, "zero": [0, 3, 5, 6], "backward": 0, "grad": 0, "none": [0, 3], "weight": [0, 2, 5, 7], "no_grad": 0, "final": [0, 2, 3, 4, 5, 6, 7], "paramet": [0, 1, 4, 5, 7], "train": [0, 7], "beta_fin": 0, "detach": 0, "recov": 0, "coeffici": [0, 5], "our": [0, 3, 4, 5, 6], "check": [0, 5], "vector": [0, 1, 3, 4, 5, 6], "close": [0, 5, 6], "correspond": [0, 3, 4, 5, 6], "element": [0, 3], "within": 0, "atol": 0, "do": [0, 1, 3, 4, 5, 6, 7], "programat": 0, "condit": [0, 3, 5, 6, 7], "edit": [0, 2], "margin": [0, 3, 4, 5], "1e": 0, "elementwis": 0, "output": [0, 1, 5], "done": [0, 1], "cleanli": 0, "stand": 0, "format": [0, 1, 3, 5], "second": [0, 3, 5, 6], "argument": [0, 3], "boolean": 0, "modifi": 0, "descrption": 0, "easi": [0, 3], "comparison": 0, "first": [0, 2, 3, 4, 5, 6], "lossess": 0, "clue": 0, "locat": [0, 2], "fix": [0, 3], "extrem": 0, "nice": [0, 5, 6, 7], "long": [0, 3], "take": [0, 1, 3, 4, 5, 6], "wrap": [0, 1], "easiest": 0, "tqdm": [0, 1, 3], "packag": [0, 1, 3], "often": [0, 3, 4, 5, 6], "want": [0, 1, 3, 5], "quickli": 0, "prototyp": 0, "quick": 0, "dirti": 0, "solut": [0, 5], "doesn": 0, "need": [0, 1, 3, 4, 5], "satisfi": 0, "But": [0, 4, 5], "report": 0, "summari": 0, "experi": 0, "cme": 0, "193": 0, "introduct": [0, 8], "scientif": 0, "unit": [0, 3, 5], "meet": [0, 3], "wednesdai": [0, 2, 3], "30": [0, 1, 2, 3, 4], "quarter": 0, "strongli": [0, 5], "recommend": 0, "concurr": 0, "enrol": 0, "mit": 0, "miss": [0, 3], "semest": 0, "softwar": [0, 8], "while": [0, 3, 4, 6], "relat": [0, 6], "stat": [0, 2, 5], "305b": [0, 2], "review": 0, "seri": 0, "programm": 0, "exce": [0, 1], "80": [0, 1, 8], "charact": [0, 1], "width": [0, 1, 3, 5], "editor": [0, 1], "vertic": [0, 1], "ruler": [0, 1], "exceed": [0, 1, 3], "limit": [0, 1, 3, 4, 5, 6], "convert": [0, 1], "pdf": [0, 1, 3], "simplest": [0, 1], "option": [0, 1], "browser": [0, 1], "sure": [0, 1, 4], "aren": [0, 1, 3, 5], "cut": [0, 1], "off": [0, 1, 3], "mai": [0, 1, 2, 3], "altern": [0, 1, 3, 4, 5, 6], "download": [0, 1], "ipynb": [0, 1], "nbconvert": [0, 1], "yourlastnam": [0, 1], "_hw": [0, 1], "renam": [0, 1], "file": [0, 1], "instal": [0, 1], "anaconda": [0, 1], "manag": [0, 1], "conda": [0, 1], "c": [0, 1, 5, 6, 7, 8], "upload": [0, 1], "gradescop": [0, 1], "tag": [0, 1], "correctli": [0, 1], "e": [0, 1, 3, 4, 5, 6, 7, 8], "all": [0, 1, 3, 4, 5, 6, 7], "relev": [0, 1], "section": [0, 1], "post": [0, 1, 3], "ed": [0, 1], "oh": [0, 1], "submit": [0, 1], "hw": [0, 1, 2], "algorithm": [1, 2, 3, 5], "discret": [1, 2, 4, 5], "homework": [1, 2], "ingredi": 1, "colleg": [1, 4], "footbal": [1, 4, 5], "game": [1, 3, 5], "2023": [1, 2, 3, 8], "season": [1, 3], "brade": 1, "predict": [1, 3, 5, 7], "winner": 1, "team": [1, 3, 5], "k": [1, 3, 4, 5, 6, 7, 8], "beta_k": 1, "basic": [1, 2, 4, 5], "higher": [1, 6], "rel": [1, 4, 6], "speak": 1, "formal": [1, 6], "intut": 1, "odd": [1, 5], "beat": [1, 3], "beta_": 1, "index": [1, 3, 4, 6], "h": [1, 6, 8], "indic": [1, 3, 4], "home": [1, 3, 5], "awai": [1, 3, 5], "respect": [1, 3, 6, 7], "y_i": [1, 5, 6, 7], "whether": [1, 4, 5, 7], "won": [1, 3], "equat": 1, "sim": [1, 3, 4, 5, 6], "bern": [1, 3, 4, 5, 6], "big": [1, 2, 7], "sigma": [1, 4, 5, 6], "cdot": [1, 3, 4, 5, 7], "sigmoid": [1, 5], "view": [1, 3, 5, 6], "covari": [1, 3, 4, 6, 7], "x_i": [1, 3, 6, 7], "mathbb": 1, "r": [1, 3, 7], "x_": [1, 3, 4], "case": [1, 3, 4, 5, 6], "text": [1, 3, 4, 5, 6], "o": [1, 3], "w": [1, 3], "beta": [1, 3, 4], "fall": [1, 3, 4], "avail": 1, "github": 1, "page": [1, 8], "load": 1, "outcom": [1, 3], "individu": 1, "wrangl": 1, "feed": 1, "torch": [1, 3], "panda": [1, 3], "pd": [1, 3], "allgam": [1, 3], "read_csv": [1, 3], "http": [1, 3, 8], "raw": [1, 3], "githubusercont": [1, 3], "com": [1, 3, 8], "slinderman": [1, 3], "winter2024": [1, 3], "01_allgam": [1, 3], "csv": [1, 3], "id": [1, 3], "week": [1, 3, 5], "type": [1, 3, 8], "date": [1, 2, 3], "time": [1, 2, 3, 4, 5, 7], "tbd": [1, 2, 3], "complet": [1, 3], "neutral": [1, 3], "site": [1, 3], "confer": [1, 3], "attend": [1, 3], "score": 1, "win": [1, 3, 5], "prob": [1, 3], "pregam": [1, 3], "elo": [1, 3], "postgam": 1, "excit": [1, 3], "highlight": [1, 3, 4, 6], "401550883": [1, 3], "regular": [1, 2, 3, 8], "08": [1, 3], "26t17": [1, 3], "00": [1, 3, 4], "000z": [1, 3], "nan": [1, 3], "401525434": [1, 3], "26t18": [1, 3], "49000": [1, 3], "american": [1, 3, 8], "athlet": [1, 3, 4, 8], "fb": [1, 3], "001042": [1, 3], "1471": [1, 3], "1385": [1, 3], "346908": [1, 3], "401540199": [1, 3], "26t19": [1, 3], "uac": [1, 3], "fc": [1, 3], "7": [1, 2, 3, 5], "025849": [1, 3], "6": [1, 2, 3], "896909": [1, 3], "401520145": [1, 3], "26t21": [1, 3], "17982": [1, 3], "usa": [1, 3], "591999": [1, 3], "1369": [1, 3], "1370": [1, 3], "821333": [1, 3], "401525450": [1, 3], "26t23": [1, 3], "15356": [1, 3], "41": [1, 3], "760751": [1, 3], "1074": [1, 3], "1122": [1, 3], "311493": [1, 3], "401532392": [1, 3], "23867": [1, 3], "mid": [1, 3, 4, 5, 6, 7], "045531": [1, 3], "1482": [1, 3], "1473": [1, 3], "547378": [1, 3], "401540628": [1, 3], "patriot": [1, 3], "077483": [1, 3], "608758": [1, 3], "401520147": [1, 3], "21407": [1, 3], "mountain": [1, 3], "west": [1, 3], "28": [1, 2, 3], "819154": [1, 3], "1246": [1, 3], "1241": [1, 3], "282033": [1, 3], "401539999": [1, 3], "meac": [1, 3], "001097": [1, 3], "122344": [1, 3], "401523986": [1, 3], "27t00": [1, 3], "63411": [1, 3], "001769": [1, 3], "1462": [1, 3], "1412": [1, 3], "698730": [1, 3], "33": [1, 3, 8], "drop": [1, 3], "construct": [1, 3, 4, 5, 6, 7], "respons": [1, 3, 4, 5, 7, 8], "l": [1, 5], "defin": [1, 3, 4, 6], "sum_": [1, 3, 4, 5, 6, 7], "_2": [1, 5], "hyperparamet": [1, 3], "control": [1, 4], "strength": [1, 4, 5], "ell_2": 1, "distribut": [1, 2, 5, 7], "bernoulli": [1, 4, 5, 7], "averag": [1, 3, 5], "neg": [1, 3, 4, 5, 6], "likelihood": [1, 4, 7], "against": [1, 4], "obtain": [1, 3, 4, 5, 6], "pytorch": [1, 3], "now": [1, 3, 5, 6, 7], "provid": [1, 5, 7], "deliver": 1, "plot": [1, 3, 7], "curv": 1, "brief": 1, "discuss": [1, 3, 4, 5, 6], "top": [1, 3, 4, 5, 6, 7], "rank": 1, "multipl": 1, "markdown": 1, "organ": 1, "autograd": 1, "without": [1, 5], "unless": [1, 7], "sort": 1, "pre": 1, "singular": 1, "mathemat": [1, 5], "context": [1, 3], "hypothesi": [1, 4, 5], "dataset": [1, 3], "empir": [1, 6], "evid": [1, 7], "invert": [1, 5, 6, 7], "initi": [1, 5], "beta_0": [1, 5], "briefli": 1, "compar": [1, 5, 6, 7], "converg": [1, 3], "anoth": [1, 5, 7], "look": [1, 3], "earlier": 1, "think": [1, 2, 3, 5], "choos": [1, 3, 4, 7], "priori": [1, 3], "chang": [1, 5, 7], "assess": 1, "perform": [1, 3, 5, 7], "held": [1, 3, 5, 7], "test": [1, 5, 6], "includ": [1, 4, 5, 6, 7], "least": [1, 3, 4, 7], "analysi": [1, 2, 4, 5, 7, 8], "conduct": 1, "assignemnt": 1, "best": [1, 2, 5], "Is": [1, 6], "signific": [1, 7], "justifi": [1, 3], "offici": 2, "ii": 2, "unoffici": 2, "realli": [2, 3, 6], "cover": [2, 6], "linear": [2, 6, 8], "sequenti": [2, 7], "latent": [2, 8], "autoregress": 2, "transform": 2, "On": 2, "side": [2, 3, 4, 5], "few": [2, 3, 5], "convex": [2, 6, 8], "optim": [2, 5, 6, 8], "approxim": [2, 3, 4, 6, 7], "bayesian": [2, 6, 7, 8], "infer": [2, 6, 7, 8], "mcmc": 2, "variat": [2, 6], "concept": 2, "implement": [2, 5], "scratch": [2, 6], "By": 2, "strong": [2, 4], "grasp": 2, "classic": [2, 3], "modern": 2, "instructor": 2, "scott": [2, 3, 8], "linderman": [2, 3], "ta": 2, "xavier": 2, "gonzalez": 2, "leda": 2, "liang": 2, "term": [2, 3, 5, 6, 7], "mondai": [2, 3], "1": [2, 3, 4, 5, 6, 7, 8], "2": [2, 3, 4, 5, 6, 7], "50pm": 2, "room": 2, "380": 2, "380d": 2, "offic": [2, 3], "10am": 2, "2nd": 2, "floor": 2, "loung": 2, "wu": 2, "tsai": 2, "neurosci": 2, "institut": 2, "thursdai": [2, 3], "5": [2, 3], "7pm": 2, "sequoia": 2, "hall": 2, "207": 2, "bowker": 2, "fridai": [2, 3], "3": [2, 3, 4, 5, 6, 8], "5pm": 2, "build": [2, 3, 5, 6, 7], "360": 2, "361a": 2, "student": 2, "comfort": [2, 3], "undergradu": 2, "multivari": [2, 3, 4], "calculu": 2, "algebra": 2, "emphas": 2, "profici": 2, "requir": 2, "hw0": 2, "primer": 2, "part": [2, 5], "agresti": [2, 3, 8], "alan": [2, 8], "categor": [2, 4, 5, 7, 8], "john": [2, 8], "wilei": [2, 8], "son": [2, 8], "2002": [2, 8], "link": [2, 5, 7], "switch": 2, "research": [2, 4], "paper": 2, "chapter": [2, 5, 6, 7], "textbook": 2, "topic": 2, "jan": 2, "agr02": [2, 3, 8], "ch": [2, 4, 5, 6], "conting": [2, 3], "tabl": [2, 3], "mlk": 2, "dai": 2, "No": [2, 4], "regress": 2, "4": [2, 3, 5], "exponenti": [2, 3, 5, 7, 8], "famili": [2, 3, 5, 7, 8], "29": 2, "probit": 2, "ac93": [2, 8], "psw13": [2, 8], "31": 2, "mix": 2, "feb": 2, "l1": 2, "glm": [2, 7], "fht10": [2, 8], "lss14": [2, 8], "midterm": 2, "hidden": 2, "markov": 2, "presid": 2, "21": 2, "field": 2, "26": 2, "recurr": 2, "neural": 2, "network": 2, "attent": 2, "tranform": 2, "mar": 2, "state": 2, "space": [2, 4], "layer": 2, "s4": 2, "s5": 2, "mamba": 2, "graph": 2, "structur": 2, "denois": 2, "diffus": 2, "everyth": [2, 5], "els": [2, 5], "There": [2, 3, 5], "due": [2, 3, 6], "roughli": [2, 3], "everi": [2, 3], "last": [2, 3, 4, 5], "bit": [2, 5, 7], "more": [2, 3, 4, 5, 6, 7], "substanti": 2, "rest": [2, 4], "releas": 2, "mon": 2, "fri": 2, "59pm": 2, "wed": 2, "bring": 2, "cheat": 2, "sheet": 2, "5x11": 2, "piec": 2, "march": 2, "30pm": 2, "percentag": 2, "particip": 2, "lectur": [3, 4, 5, 6], "block": 3, "throughout": 3, "common": [3, 5, 7], "toss": 3, "bias": 3, "coin": 3, "head": [3, 4, 8], "event": 3, "flip": 3, "tail": [3, 4], "mass": 3, "pmf": [3, 4, 6], "succinctli": 3, "mildli": 3, "overload": 3, "nomenclatur": 3, "repres": [3, 4, 5], "clear": [3, 4], "var": [3, 4, 5, 6, 7], "iid": [3, 4, 5, 6], "trial": 3, "bin": [3, 4], "Its": [3, 6], "np": 3, "infti": [3, 4, 5, 6], "product": [3, 4, 5], "stai": 3, "constant": [3, 5], "suppos": [3, 4, 5, 6], "spike": 3, "fire": 3, "neuron": 3, "simplic": 3, "assum": [3, 4, 5, 6, 7], "divid": 3, "size": [3, 5], "proport": 3, "reals_": [3, 4, 5, 6], "moreov": [3, 5, 7], "shouldn": 3, "matter": 3, "determin": [3, 5, 6], "resolut": 3, "detect": 3, "care": 3, "separ": 3, "As": [3, 6, 7], "po": [3, 4, 6, 7], "fact": [3, 6, 7], "properti": [3, 6, 7], "appropri": [3, 4, 5], "assumpt": [3, 5], "shortli": 3, "far": 3, "talk": [3, 5, 6], "scalar": [3, 4, 6, 7], "extend": [3, 5], "idea": [3, 5, 7], "count": [3, 4, 7], "consid": [3, 4, 5, 6, 7], "die": 3, "face": 3, "probabilit": 3, "mbpi": [3, 4, 6], "pi_1": [3, 6], "pi_k": [3, 6], "delta_": [3, 4, 6], "left": [3, 4, 5, 6, 7], "sum_k": 3, "right": [3, 4, 5, 6, 7], "simplex": [3, 6], "embed": [3, 5], "real": [3, 5, 6, 7], "roll": 3, "cat": [3, 6], "prod_": [3, 4, 6], "bbi": [3, 4, 6], "otherwis": 3, "natur": [3, 4, 5, 6, 7], "categori": 3, "hot": [3, 6], "mbe_1": 3, "mbe_k": 3, "th": 3, "posit": [3, 4, 5, 6, 7], "mbx": [3, 4, 5, 7], "x_k": 3, "represent": [3, 6], "straightforward": 3, "z_i": 3, "came": 3, "mult": [3, 4], "cx_n": 3, "x_1": [3, 5], "cov": [3, 4, 5, 6], "bmatrix": [3, 4], "pi_2": 3, "vdot": [3, 4], "_": [3, 4, 5, 6, 7], "ij": [3, 4], "pi_i": [3, 4], "pi_j": [3, 6], "neq": [3, 6, 7], "collect": [3, 5], "ident": [3, 5, 6], "lambda_i": 3, "bullet": [3, 4], "lambda_k": 3, "notat": [3, 4, 6], "render": 3, "depend": [3, 4, 5, 7], "specif": [3, 5], "lambda_1": 3, "lambda_": [3, 4, 5], "word": [3, 5], "simpl": [3, 5], "those": [3, 4], "mbtheta": [3, 5], "observ": [3, 4, 5, 7], "reduc": [3, 4, 5], "cl": [3, 5, 6, 7], "theta": [3, 4, 5, 6], "hat": [3, 4, 5, 6, 7], "mathsf": [3, 5, 6, 7], "arg": [3, 5], "max": [3, 5], "singl": [3, 4, 5], "global": [3, 5, 6], "unknown": [3, 7], "deriv": [3, 5, 6, 7], "dif": [3, 4, 5, 6], "solv": [3, 5, 6], "yield": [3, 4, 5, 6, 7], "fraction": [3, 5], "could": [3, 4, 5, 6, 7], "truli": 3, "star": [3, 5, 6, 7], "certain": [3, 4, 5], "achiev": [3, 5], "cramer": 3, "rao": 3, "lower": [3, 5], "bound": 3, "sqrt": [3, 4, 6], "cn": 3, "ci": [3, 4, 5, 6], "squar": [3, 4, 6, 7], "root": 3, "diagon": [3, 5], "partial": [3, 6, 7], "confus": 3, "yourself": 3, "poor": [3, 5], "precis": [3, 5], "map": [3, 5, 6, 7], "cx": 3, "mapsto": [3, 5, 6], "itself": 3, "nabla_": [3, 5, 6], "treat": 3, "e_": [3, 6, 7], "int_": 3, "mbzero": [3, 5], "again": [3, 4, 6], "cov_": [3, 6], "underbrac": 3, "twice": [3, 5, 6, 7], "hessian": [3, 5, 7], "nabla": [3, 4, 5, 6, 7], "2_": [3, 4, 6, 7], "interestingli": [3, 4], "revisit": 3, "null": [3, 4, 7], "ch_0": [3, 4], "theta_0": 3, "exploit": 3, "z": [3, 4, 7], "subscript": 3, "simplifi": [3, 5, 6, 7], "chi": [3, 4, 6, 7], "degre": [3, 4], "freedom": [3, 4], "non": [3, 4, 5, 6], "mbtheta_0": 3, "larg": [3, 4], "canon": 3, "ratio": [3, 5, 7], "lagrang": 3, "multipli": [3, 6], "finit": [3, 5], "sec": 3, "detail": 3, "hypothes": [3, 4], "level": [3, 4, 7], "alpha": [3, 4, 5], "95": [3, 4], "96": [3, 4], "pm": [3, 4], "continu": [3, 5], "found": [3, 4, 6], "togeth": [3, 6], "gaussian": [3, 5], "sinc": [3, 4, 5, 6], "tempt": 3, "interpret": [3, 4, 5], "fallaci": 3, "misinterpret": 3, "frequentist": 3, "To": [3, 5, 6, 7], "claim": 3, "adopt": 3, "perspect": [3, 6], "posterior": [3, 4, 5], "prior": [3, 4, 5], "bay": [3, 5], "rule": [3, 5], "denomin": 3, "analogu": 3, "summar": [3, 4, 5], "captur": [3, 4], "infinit": [3, 5], "choic": [3, 5], "quantil": 3, "howev": [3, 4, 5], "inde": [3, 4, 6], "subject": 3, "sourc": 3, "critic": 3, "noth": 3, "weak": 3, "uninform": 3, "advantag": 3, "admit": [3, 4], "most": [3, 5], "conjug": [3, 4, 6], "densiti": [3, 6], "b": [3, 5], "shape": 3, "uniform": 3, "propto": 3, "mode": [3, 5], "posteriori": [3, 5], "small": [3, 4, 6, 7], "cumul": [3, 6], "cdf": [3, 5], "incomplet": 3, "smaller": 3, "thu": [3, 5, 6, 7], "approx": [3, 4, 5, 6, 7], "match": [3, 5, 6], "littl": [3, 5], "tonight": 3, "michigan": 3, "wolverin": 3, "washington": 3, "huski": 3, "mod": 3, "That": [3, 4, 5, 6, 7], "setup": 3, "defaultdict": 3, "user": 3, "anaconda3": 3, "lib": 3, "python3": 3, "auto": 3, "py": 3, "tqdmwarn": 3, "iprogress": 3, "ipywidget": 3, "readthedoc": 3, "io": 3, "en": 3, "stabl": 3, "user_instal": 3, "html": 3, "autonotebook": 3, "notebook_tqdm": 3, "googl": 3, "spreadsheet": 3, "1lul": 3, "n2miih7ace47zagj_4wspbgrhy9e04zujmevf40": 3, "export": 3, "timestamp": 3, "net": 3, "select": [3, 5, 7], "slot": 3, "hold": [3, 4, 5, 7], "midnight": 3, "tuesdai": 3, "03": 3, "swl1": 3, "ye": 3, "predicted_scor": 3, "tensor": [3, 4], "float32": 3, "predicted_hist": 3, "histogramdd": 3, "imshow": 3, "extent": 3, "cmap": 3, "grei": 3, "xtick": 3, "ytick": 3, "xlabel": 3, "ylabel": 3, "titl": 3, "f": [3, 5, 6, 7], "len": 3, "grid": 3, "colorbar": 3, "collegefootballdata": 3, "past_scor": 3, "past_hist": 3, "umdriv": 3, "01_umdriv": 3, "uwdriv": 3, "01_uwdriv": 3, "def": 3, "compute_drive_prob": 3, "even": [3, 4, 5, 6], "though": [3, 5, 6], "granular": 3, "encod": [3, 6], "integ": 3, "td": 3, "fg": 3, "allow": [3, 4, 7], "offens": 3, "defens": 3, "um_off_prob": 3, "um_off_n": 3, "um_def_prob": 3, "um_def_n": 3, "uw_off_prob": 3, "uw_off_n": 3, "uw_def_prob": 3, "uw_def_n": 3, "fig": 3, "ax": 3, "subplot": 3, "figsiz": 3, "sharex": 3, "sharei": 3, "bar": [3, 7], "color": 3, "gold": 3, "label": 3, "purpl": 3, "set_titl": 3, "legend": 3, "set_xtick": 3, "set_ylim": 3, "set_xlabel": 3, "set_ylabel": 3, "surpris": 3, "per": 3, "me": 3, "high": [3, 4], "fly": 3, "isn": [3, 4, 5], "amaz": 3, "anywai": 3, "middl": 3, "drawn": 3, "um": 3, "uw": 3, "vice": 3, "versa": 3, "um_avg_prob": 3, "uw_avg_prob": 3, "pat": 3, "2pt": 3, "convers": 3, "98": 3, "01": [3, 4], "bunch": 3, "num_gam": 3, "num_driv": 3, "point_val": 3, "um_point": 3, "uw_point": 3, "scatter": 3, "60": [3, 4], "lw": 3, "marker": 3, "ms": 3, "xlim": 3, "ylim": 3, "gca": 3, "set_aspect": 3, "accord": 3, "upper": [3, 5], "hand": [3, 5], "hail": 3, "victor": [3, 8], "pr": [3, 4, 5], "2f": 3, "66": 3, "spread": 3, "victori": 3, "edgecolor": 3, "axvlin": 3, "ls": 3, "also": [3, 4, 5, 6], "bet": 3, "52": 3, "82": 3, "pro": 3, "favor": 3, "56": 3, "show": [3, 4, 5, 6], "favorit": [3, 5], "anyth": 3, "sim_hist": 3, "column_stack": 3, "Not": 3, "bad": 3, "clearli": 3, "pick": 3, "digit": 3, "trend": 3, "appar": 3, "34": 3, "closer": [3, 6], "suggest": 3, "fell": 3, "ala": 3, "my": 3, "jim": 3, "harbaugh": 3, "bobblehead": 3, "prize": 3, "fare": 3, "basi": 3, "01_final": 3, "um_finals_prob": 3, "um_finals_n": 3, "uw_finals_prob": 3, "uw_finals_n": 3, "avg": 3, "grai": 3, "black": 3, "vs": 3, "media": 3, "interview": 3, "player": [3, 4], "plai": [3, 4], "who": [3, 4, 5], "touchdown": 3, "outperform": 3, "fun": [3, 4], "watch": [3, 4], "hope": 3, "had": [3, 4], "tast": 3, "seem": 3, "stretch": 3, "exactli": [3, 4], "likewis": [3, 4, 6], "procedur": 3, "These": [3, 5], "sophist": 3, "complex": [3, 4, 5, 6, 7], "joint": [3, 4, 5, 6, 7], "pair": [3, 5], "interest": [4, 5], "sound": 4, "lot": 4, "soon": 4, "enough": [4, 5], "turn": [4, 5, 7], "plenti": 4, "boil": [4, 5], "down": [4, 5], "relationship": [4, 6], "nation": 4, "championship": 4, "analys": 4, "love": 4, "hate": 4, "increasingli": 4, "repetit": [4, 8], "injuri": 4, "sustain": 4, "devast": 4, "consequ": 4, "increas": [4, 5], "risk": 4, "chronic": 4, "traumat": 4, "encephalopathi": 4, "cte": 4, "recent": 4, "studi": 4, "mckee": [4, 8], "et": 4, "al": 4, "mma": [4, 8], "jama": [4, 8], "neurolog": [4, 8], "amateur": 4, "school": 4, "york": 4, "sad": 4, "articl": 4, "definit": [4, 5], "diagnos": 4, "via": [4, 7, 8], "autopsi": 4, "brain": 4, "152": 4, "peopl": 4, "contact": [4, 8], "sport": [4, 8], "di": 4, "ag": 4, "variou": 4, "overdos": 4, "suicid": 4, "neurodegen": 4, "diseas": 4, "Of": 4, "92": 4, "soccer": 4, "hockei": 4, "wrestl": 4, "rugbi": 4, "63": 4, "upon": 4, "neuropatholog": [4, 8], "48": 4, "45": 4, "44": 4, "89": 4, "With": [4, 5], "associ": [4, 5, 8], "causal": 4, "caveat": 4, "pi_": 4, "1j": 4, "i1": 4, "triangleq": [4, 5, 6, 7], "kei": 4, "factor": [4, 5], "perp": 4, "iff": 4, "foral": 4, "homogen": 4, "usual": [4, 6], "noisi": 4, "free": 4, "special": [4, 5, 6, 7], "vec": 4, "ravel": 4, "explanatori": [4, 5], "condition": 4, "mbx_": 4, "mbpi_": 4, "mbx_i": [4, 5, 7], "2x2": [4, 5], "hypergeom": 4, "arriv": 4, "adapt": 4, "blitzstein": [4, 8], "hwang": [4, 8], "bh19": [4, 8], "abbrevi": 4, "cumbersom": 4, "consist": 4, "ind": 4, "in0": 4, "impli": [4, 5, 6, 7], "substitut": [4, 5], "binomi": [4, 7], "cancel": 4, "group": 4, "varieti": 4, "latter": 4, "omega": [4, 6], "recal": [4, 5, 6, 7], "i0": 4, "omega_i": 4, "omega_1": 4, "omega_0": 4, "conveni": [4, 6], "magnitud": [4, 5], "confound": 4, "2x2x2": 4, "ijk": 4, "mayb": 4, "amount": [4, 6], "concis": 4, "2x2xk": 4, "theta_": 4, "theta_k": 4, "measur": [4, 5, 6], "sign": [4, 6], "mle": [4, 7], "estim": [4, 7], "pi": [4, 5, 6], "wald": [4, 5], "usign": 4, "asymptot": 4, "nonlinear": [4, 5], "maximum": [4, 7], "inform": [4, 5, 6], "g": [4, 5, 8], "order": [4, 5, 6], "taylor": [4, 5, 6], "around": [4, 5], "pmatrix": 4, "_i": [4, 7], "_j": 4, "plug": [4, 5, 6], "shown": [4, 7], "accept": 4, "region": 4, "revers": 4, "impos": 4, "constraint": 4, "constrain": 4, "subset": [4, 5], "outer": [4, 5], "larger": [4, 5, 7], "sup_": 4, "unconstrain": 4, "mu": [4, 5, 6, 7], "monoton": [4, 5], "lead": [4, 5, 7], "geq": [4, 5], "min": [4, 5], "conclud": 4, "involv": [4, 5], "unif": 4, "almost": 4, "nevertheless": [4, 5], "mont": 4, "carlo": 4, "credibl": [4, 5], "correl": 4, "fundament": 4, "present": 4, "ultim": 4, "sever": [4, 5], "contin": 5, "featur": [5, 7], "oppon": 5, "problem": [5, 6], "form": [5, 6], "took": 5, "305a": 5, "pretti": 5, "mbbeta": [5, 7], "beta_j": 5, "x_j": [5, 7], "ordinari": 5, "ol": 5, "wrong": 5, "issu": 5, "produc": 5, "valid": [5, 6], "necessarili": 5, "misspecifi": 5, "violat": 5, "homoskedast": 5, "crazi": 5, "intermedi": 5, "keep": 5, "ensur": [5, 6], "squash": 5, "particularli": 5, "attract": 5, "compon": 5, "logit": [5, 6], "simpler": 5, "calcul": 5, "later": [5, 6], "beta_1": 5, "x_p": 5, "beta_p": 5, "unfortun": 5, "unlik": 5, "maxim": 5, "minim": [5, 7, 8], "residu": [5, 7], "rememb": 5, "direct": 5, "steepest": 5, "tell": 5, "decreas": 5, "move": 5, "underestim": 5, "opposit": 5, "overestim": 5, "mbbeta_": 5, "leftarrow": 5, "mbbeta_t": 5, "alpha_t": 5, "step": 5, "chosen": 5, "behav": 5, "alorithm": 5, "local": [5, 6], "optimum": 5, "optima": [5, 6], "stronger": 5, "guarante": 5, "w_i": [5, 7], "semi": [5, 6], "eigenvalu": [5, 6], "quadrat": 5, "leq": 5, "smooth": 5, "norm": 5, "max_": 5, "mbu": 5, "bbs_": 5, "tfrac": [5, 6], "sphere": 5, "meant": 5, "tight": 5, "mbbeta_0": 5, "gap": [5, 6], "epsilon": 5, "sub": 5, "linearli": 5, "exist": [5, 6], "lim_": 5, "satur": [5, 7], "goe": 5, "diverg": [5, 7], "grow": 5, "problemat": 5, "avert": 5, "textcolor": 5, "red": 5, "penal": 5, "penalti": 5, "mbi": 5, "remain": 5, "path": [5, 8], "cross": 5, "spheric": 5, "stanc": 5, "strang": 5, "entir": 5, "whole": 5, "At": 5, "minimum": [5, 6], "stepsiz": 5, "recurs": 5, "leverag": [5, 7], "consider": 5, "widetild": 5, "stationari": [5, 6], "succ": 5, "vanilla": 5, "repeatedli": 5, "until": 5, "damp": 5, "improv": 5, "stabil": 5, "backtrack": 5, "search": 5, "lipschitz": 5, "co": [5, 6], "doubl": 5, "incred": 5, "slowli": 5, "statement": 5, "boyd": [5, 8], "vandenbergh": [5, 8], "bv04": [5, 8], "mby": [5, 7], "_t": 5, "mbw_t": 5, "design": 5, "diag": [5, 7], "w_": 5, "undamp": 5, "mbz_t": 5, "recogn": [5, 7], "adjust": 5, "z_": 5, "insight": 5, "glean": 5, "fisher": [5, 6], "formula": 5, "widehat": 5, "interv": [5, 6], "good": 5, "likelihod": 5, "invalid": 5, "mbsigma": 5, "longer": 5, "l2": 5, "incorpor": 5, "along": 5, "possibl": 5, "expand": 5, "familiar": [6, 7], "brad": 6, "efron": [6, 8], "bridg": 6, "exact": 6, "appeal": 6, "eta": [6, 7], "exp": 6, "langl": [6, 7], "rangl": [6, 7], "cy": 6, "suffici": 6, "partit": 6, "properli": 6, "domain": [6, 7], "paremet": 6, "written": [6, 7], "mbe_i": 6, "mbeta": 6, "moment": 6, "k_": 6, "skew": 6, "kurtosi": 6, "strictli": 6, "uniqu": 6, "bbe": 6, "regardless": 6, "matric": 6, "positid": 6, "greater": 6, "henc": 6, "stem": 6, "wherea": 6, "lie": 6, "mbt": 6, "eta_1": 6, "eta_": 6, "eta_k": 6, "cm": 6, "e_p": 6, "realiz": 6, "inject": 6, "surject": 6, "interior": 6, "exclud": 6, "boundari": 6, "biject": 6, "math": [6, 7], "jacobian": 6, "immedi": 6, "back": [6, 7], "theorem": [6, 7], "var_": 6, "kullback": 6, "leibler": 6, "entropi": 6, "q": 6, "symmetr": 6, "eta_p": 6, "eta_q": 6, "bregman": 6, "cast": 6, "lambda_p": 6, "lambda_q": 6, "mu_p": 6, "mu_q": 6, "rearrang": 6, "remaind": 6, "metric": 6, "asymmetri": 6, "quantiti": 6, "simpli": 6, "standar": 6, "shorthand": 6, "r_": [6, 7], "tend": 6, "obviou": 6, "pearson": 6, "efr22": [6, 8], "surfac": 6, "probabilist": 6, "aspect": 6, "connect": 6, "saw": 6, "todai": 6, "computation": 6, "intract": 6, "motiv": 6, "arm": 6, "whose": 7, "carri": 7, "eta_i": 7, "rightarrow": 7, "said": 7, "And": 7, "newton": 7, "delta": 7, "mbw": 7, "mbz": 7, "w_1": 7, "iter": 7, "reweight": 7, "irl": 7, "current": 7, "seen": 7, "refer": 7, "baselin": 7, "p_": 7, "sat": 7, "previou": 7, "kl": 7, "mbmu": 7, "poorer": 7, "typic": 7, "mu_i": 7, "equiv": 7, "mbone": 7, "unregular": 7, "explaiend": 7, "wors": 7, "_0": 7, "_1": 7, "subtract": 7, "inspect": 7, "misspecif": 7, "accuraci": 7, "split": 7, "leav": 7, "loocv": 7, "withhold": 7, "datapoint": 7, "y_j": 7, "fold": 7, "bia": 7, "correct": 7, "emph": 7, "jackknif": 7, "resampl": 7, "wrt": 7, "flexibl": 7, "softmax": 7, "softplu": 7, "distribiut": 7, "analog": 7, "moodel": 7, "excus": 7, "dig": 7, "volum": 8, "792": 8, "url": 8, "onlinelibrari": 8, "doi": 8, "book": 8, "1002": 8, "0471249688": 8, "jame": 8, "albert": 8, "siddhartha": 8, "chib": 8, "polychotom": 8, "journal": 8, "669": 8, "679": 8, "1993": 8, "joseph": 8, "jessica": 8, "crc": 8, "press": 8, "2019": 8, "stephen": 8, "lieven": 8, "cambridg": 8, "2004": 8, "bradlei": 8, "theori": 8, "2022": 8, "jerom": 8, "friedman": 8, "trevor": 8, "hasti": 8, "rob": 8, "tibshirani": 8, "coordin": 8, "2010": 8, "jason": 8, "lee": 8, "yuekai": 8, "sun": 8, "michael": 8, "saunder": 8, "proxim": 8, "ewton": 8, "composit": 8, "siam": 8, "1420": 8, "1443": 8, "2014": 8, "ann": 8, "jess": 8, "mez": 8, "bobak": 8, "abdolmohammadi": 8, "morgan": 8, "butler": 8, "bertrand": 8, "russel": 8, "huber": 8, "madelin": 8, "uretski": 8, "katharin": 8, "babcock": 8, "jonathan": 8, "cherri": 8, "alvarez": 8, "brett": 8, "martin": 8, "clinic": 8, "young": 8, "expos": 8, "impact": 8, "1037": 8, "1050": 8, "nichola": 8, "polson": 8, "windl": 8, "\u00f3": 8, "lya": 8, "108": 8, "504": 8, "1339": 8, "1349": 8, "2013": 8}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"hw0": 0, "pytorch": 0, "primer": 0, "1": [0, 1], "construct": 0, "tensor": 0, "problem": [0, 1], "2": [0, 1], "3": [0, 1], "4": [0, 1], "5": [0, 1], "6": 0, "broadcast": 0, "fanci": 0, "index": 0, "distribut": [0, 3, 4, 6], "debug": 0, "sleuth": 0, "type": 0, "shape": 0, "dir": 0, "pdb": 0, "breakpoint": 0, "linear": [0, 5, 7], "regress": [0, 1, 5, 7], "assert": 0, "torch": 0, "allclos": 0, "f": 0, "string": 0, "plot": 0, "progress": 0, "bar": 0, "time": 0, "more": 0, "resourc": 0, "7": 0, "submiss": [0, 1], "instruct": [0, 1], "hw1": 1, "logist": [1, 2, 5, 7], "The": [1, 6], "bradlei": 1, "terri": 1, "model": [1, 3, 5, 7], "data": 1, "0": 1, "preprocess": 1, "loss": 1, "function": 1, "gradient": [1, 5, 6], "descent": [1, 5], "implement": 1, "check": [1, 7], "your": 1, "newton": [1, 5], "s": [1, 4, 5], "method": [1, 4, 5], "hessian": [1, 6], "posit": 1, "definit": [1, 6], "critic": 1, "revis": 1, "improv": 1, "evalu": 1, "reflect": 1, "overview": 2, "prerequisit": 2, "book": 2, "tent": 2, "schedul": 2, "assign": 2, "exam": 2, "grade": 2, "discret": 3, "basic": 3, "statist": 3, "infer": [3, 4, 5], "bernoulli": [3, 6], "binomi": 3, "poisson": [3, 4, 6], "categor": [3, 6], "multinomi": [3, 4], "connect": 3, "maximum": [3, 5, 6], "likelihood": [3, 5, 6], "estim": [3, 5, 6], "exampl": [3, 4, 5, 6], "mle": [3, 5, 6], "asymptot": [3, 5, 6], "normal": [3, 6], "fisher": [3, 4], "inform": 3, "matrix": 3, "hypothesi": 3, "test": [3, 4], "wald": 3, "confid": [3, 4], "interv": [3, 4], "paramet": [3, 6], "bayesian": [3, 4, 5], "credibl": 3, "demo": 3, "colleg": 3, "footbal": 3, "nation": 3, "championship": 3, "poll": 3, "result": 3, "compar": [3, 4], "actual": 3, "score": 3, "individu": 3, "drive": 3, "simul": 3, "come": 3, "full": 3, "circl": 3, "postgam": 3, "analysi": 3, "conclus": [3, 4, 5, 6, 7], "conting": [4, 5], "tabl": [4, 5], "motiv": 4, "question": [4, 5, 6], "independ": 4, "sampl": 4, "hypergeometr": 4, "deriv": 4, "bay": 4, "rule": 4, "two": [4, 5], "proport": 4, "condit": 4, "simpson": 4, "paradox": 4, "log": [4, 5, 6], "odd": 4, "ratio": 4, "delta": 4, "wai": [4, 5], "exact": 4, "setup": 5, "relationship": 5, "note": [5, 7], "about": 5, "intercept": [5, 7], "comput": 5, "convex": 5, "likelhood": 5, "converg": 5, "rate": 5, "bound": 5, "covari": 5, "patholog": 5, "separ": 5, "regim": 5, "regular": 5, "choos": 5, "hyperparamet": 5, "perspect": 5, "revisit": [5, 7], "iter": 5, "reweight": 5, "least": 5, "squar": 5, "caution": 5, "laplac": 5, "approxim": 5, "evid": 5, "exponenti": 6, "famili": 6, "gaussian": 6, "known": 6, "varianc": 6, "minim": 6, "answer": 6, "mean": 6, "parameter": 6, "kl": 6, "diverg": 6, "devianc": [6, 7], "residu": 6, "gener": 7, "canon": 7, "case": 7, "non": 7, "good": 7, "fit": 7, "fraction": 7, "explain": 7, "comparison": 7, "cross": 7, "valid": 7, "refer": 8}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})