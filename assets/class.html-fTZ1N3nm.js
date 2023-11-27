import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-O0xqlHfm.js";const p={},e=t(`<h1 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoModelForSequenceClassification
<span class="token keyword">from</span> datasets <span class="token keyword">import</span> Dataset<span class="token punctuation">,</span> ClassLabel<span class="token punctuation">,</span> load_metric
<span class="token keyword">from</span> torch<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>data <span class="token keyword">import</span> DataLoader
<span class="token keyword">from</span> torch<span class="token punctuation">.</span>optim <span class="token keyword">import</span> AdamW
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> get_scheduler
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path


<span class="token keyword">def</span> <span class="token function">load_device</span><span class="token punctuation">(</span>device_name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    use GPU or CPU?

    Args:
        device_name (str): &#39;auto&#39; means that will use gpu, if there is.
    Returns:
        torch.device

    &quot;&quot;&quot;</span>
    <span class="token keyword">if</span> device_name <span class="token operator">==</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> torch<span class="token punctuation">.</span>device<span class="token punctuation">(</span><span class="token string">&quot;cuda&quot;</span> <span class="token keyword">if</span> torch<span class="token punctuation">.</span>cuda<span class="token punctuation">.</span>is_available<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token string">&quot;cpu&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> device_name


<span class="token keyword">def</span> <span class="token function">load_tokenizer</span><span class="token punctuation">(</span>model_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    load_tokenizer

    Args:
        model_path (str): full model path

    Returns:
        transformers.tokenizer

    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>model_path<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">load_model</span><span class="token punctuation">(</span>model_path<span class="token punctuation">,</span>device<span class="token punctuation">,</span>num_labels<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    load model

    Args:
        model_path (str): full model path
        device (str): model&#39;s device
        num_labels (int): the nums of output

    Returns:
        transformers.model

    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>model_path<span class="token punctuation">,</span>num_labels<span class="token operator">=</span>num_labels<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">BertTrain</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> model_name<span class="token punctuation">,</span>task_name<span class="token punctuation">,</span>labels<span class="token punctuation">,</span>expand<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>train_or_predict<span class="token operator">=</span><span class="token string">&quot;predict&quot;</span><span class="token punctuation">,</span>test_size<span class="token operator">=</span><span class="token number">0.2</span><span class="token punctuation">,</span>device_name<span class="token operator">=</span><span class="token string">&#39;auto&#39;</span>
                <span class="token punctuation">,</span>num_epochs <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>batch_size <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        init instance

        Args:
            model_name (str): only model name, exclude path.
            task_name (str): is this model for what?
            num_labels (int): nums of output
            labels (list): lables of output, the index is the num of label
            train_or_predict (str): is this for training model or using model for predicting.
                if train, the model_path will be &quot;./pretrained_model/&quot; + model_name, the path to load pretrained model.
                    and new_model_path = &quot;./finetuning_model/&quot; + task_name, the path to save trained model.
                if predict, the mode_path will be &quot;./finetuning_model/&quot; + task_name, the path to load finetuning model.
            test_size (str): if training model, the percentage of train samples of all
            device_name (str): cpu or gpu
            num_epochs (int): how many epochs
            batch_size (int): size of batch
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>task_name <span class="token operator">=</span> task_name
        self<span class="token punctuation">.</span>model_name <span class="token operator">=</span> model_name
        self<span class="token punctuation">.</span>dir_path <span class="token operator">=</span> <span class="token string">&quot;./finetuning_model/&quot;</span> <span class="token keyword">if</span> train_or_predict <span class="token operator">==</span> <span class="token string">&quot;predict&quot;</span> <span class="token keyword">else</span> <span class="token string">&quot;./pretrained_model/&quot;</span>
        self<span class="token punctuation">.</span>model_path <span class="token operator">=</span> self<span class="token punctuation">.</span>dir_path <span class="token operator">+</span> task_name <span class="token keyword">if</span> train_or_predict <span class="token operator">==</span> <span class="token string">&quot;predict&quot;</span> <span class="token keyword">else</span> self<span class="token punctuation">.</span>dir_path <span class="token operator">+</span> model_name
        self<span class="token punctuation">.</span>device <span class="token operator">=</span> load_device<span class="token punctuation">(</span>device_name<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>tokenizer <span class="token operator">=</span> load_tokenizer<span class="token punctuation">(</span>self<span class="token punctuation">.</span>model_path<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>model <span class="token operator">=</span> load_model<span class="token punctuation">(</span>self<span class="token punctuation">.</span>model_path<span class="token punctuation">,</span> self<span class="token punctuation">.</span>device<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>labels<span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>classLabel <span class="token operator">=</span> ClassLabel<span class="token punctuation">(</span>names<span class="token operator">=</span>labels<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>expand <span class="token operator">=</span> expand

        <span class="token keyword">if</span> train_or_predict <span class="token operator">==</span> <span class="token string">&quot;predict&quot;</span><span class="token punctuation">:</span>  <span class="token comment"># delete method irrelevant to predict mod</span>
            <span class="token keyword">pass</span>
<span class="token comment">##             delattr(__class__,&quot;data_process&quot;)</span>
<span class="token comment">##             delattr(__class__, &quot;train&quot;)</span>
<span class="token comment">##             delattr(__class__, &quot;one_stop_train&quot;)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>  <span class="token comment"># add attribute relevant train mod</span>
            self<span class="token punctuation">.</span>num_epochs<span class="token operator">=</span>num_epochs
            self<span class="token punctuation">.</span>batch_size<span class="token operator">=</span>batch_size
            self<span class="token punctuation">.</span>test_size <span class="token operator">=</span> test_size
            self<span class="token punctuation">.</span>new_model_path <span class="token operator">=</span> <span class="token string">&quot;./pre_finetuning_model/&quot;</span> <span class="token operator">+</span> task_name

    <span class="token keyword">def</span> <span class="token function">data_process</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>df<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        preprocess data.
            1. split dataframe into train and test by test_size and stratify by &quot;labels&quot;
            2. tokenize &quot;text&quot;
            3. return [train_dataloader,eval_dataloader,df]

        Args:
            df (pandas.DataFrame): the df mast have columns named &quot;text&quot; and &quot;labels&quot;

        Returns:
            [train_dataloader,eval_dataloader,df]

        &quot;&quot;&quot;</span>
        text_column_name <span class="token operator">=</span> <span class="token string">&#39;text&#39;</span>
        labels_column_name <span class="token operator">=</span> <span class="token string">&#39;labels&#39;</span>
        <span class="token keyword">assert</span> text_column_name <span class="token keyword">in</span> df<span class="token punctuation">.</span>columns
        <span class="token keyword">assert</span> labels_column_name <span class="token keyword">in</span> df<span class="token punctuation">.</span>columns

        df_with_index <span class="token operator">=</span> df<span class="token punctuation">.</span>reset_index<span class="token punctuation">(</span><span class="token punctuation">)</span>
        df_for_train <span class="token operator">=</span> df_with_index<span class="token punctuation">.</span>loc<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>text_column_name<span class="token punctuation">,</span> labels_column_name<span class="token punctuation">]</span><span class="token punctuation">]</span>

        dataset <span class="token operator">=</span> Dataset<span class="token punctuation">.</span>from_pandas<span class="token punctuation">(</span>df_for_train<span class="token punctuation">)</span>
        dataset <span class="token operator">=</span> dataset<span class="token punctuation">.</span>cast_column<span class="token punctuation">(</span>labels_column_name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>classLabel<span class="token punctuation">)</span>
        datadict <span class="token operator">=</span> dataset<span class="token punctuation">.</span>train_test_split<span class="token punctuation">(</span>test_size<span class="token operator">=</span>self<span class="token punctuation">.</span>test_size<span class="token punctuation">,</span> stratify_by_column<span class="token operator">=</span> labels_column_name<span class="token punctuation">,</span>seed<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>
        
        test_df <span class="token operator">=</span> datadict<span class="token punctuation">[</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>to_pandas<span class="token punctuation">(</span><span class="token punctuation">)</span>
        train_df <span class="token operator">=</span> datadict<span class="token punctuation">[</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>to_pandas<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello1&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># expand</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>expand<span class="token punctuation">:</span>
            label_id <span class="token operator">=</span> self<span class="token punctuation">.</span>classLabel<span class="token punctuation">.</span>str2int<span class="token punctuation">(</span><span class="token string">&quot;youchoice&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>label_id<span class="token punctuation">)</span>
            df_expand <span class="token operator">=</span> pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">[</span>train_df<span class="token punctuation">[</span>train_df<span class="token punctuation">[</span><span class="token string">&quot;labels&quot;</span><span class="token punctuation">]</span> <span class="token operator">==</span> label_id<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>df_expand<span class="token punctuation">)</span>
            <span class="token keyword">del</span> df_expand<span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">]</span>
            dict_expand <span class="token operator">=</span> df_expand<span class="token punctuation">.</span>to_dict<span class="token punctuation">(</span>orient<span class="token operator">=</span><span class="token string">&quot;records&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">for</span> item <span class="token keyword">in</span> dict_expand<span class="token punctuation">:</span>
                datadict<span class="token punctuation">[</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> datadict<span class="token punctuation">[</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>add_item<span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>datadict<span class="token punctuation">)</span>
        <span class="token comment"># expand</span>

        df_with_index<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>df_with_index<span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>isin<span class="token punctuation">(</span>test_df<span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;splitmark&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span>
        df_with_index<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>df_with_index<span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>isin<span class="token punctuation">(</span>train_df<span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;splitmark&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;train&quot;</span>
        df_with_splitmark <span class="token operator">=</span> df_with_index<span class="token punctuation">.</span>set_index<span class="token punctuation">(</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">)</span>

        tokenized_datadict <span class="token operator">=</span> datadict<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>self<span class="token punctuation">.</span>tokenizer<span class="token punctuation">(</span>x<span class="token punctuation">[</span>text_column_name<span class="token punctuation">]</span><span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token string">&#39;max_length&#39;</span><span class="token punctuation">,</span> truncation<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> max_length<span class="token operator">=</span><span class="token number">512</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                        batched<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>remove_columns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>text_column_name<span class="token punctuation">]</span><span class="token punctuation">)</span>
        tokenized_datadict<span class="token punctuation">.</span>set_format<span class="token punctuation">(</span><span class="token string">&quot;torch&quot;</span><span class="token punctuation">)</span>
        train_dataloader <span class="token operator">=</span> DataLoader<span class="token punctuation">(</span>tokenized_datadict<span class="token punctuation">[</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> shuffle<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> batch_size<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span>
        eval_dataloader <span class="token operator">=</span> DataLoader<span class="token punctuation">(</span>tokenized_datadict<span class="token punctuation">[</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> batch_size<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> train_dataloader<span class="token punctuation">,</span>eval_dataloader<span class="token punctuation">,</span>df_with_splitmark

    <span class="token keyword">def</span> <span class="token function">train</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>train_dataloader<span class="token punctuation">,</span>eval_dataloader<span class="token punctuation">,</span>df_with_splitmark<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        train the model
        Args:
            train_dataloader:
            eval_dataloader:

        Returns:
            train the self.model

        &quot;&quot;&quot;</span>
        optimizer <span class="token operator">=</span> AdamW<span class="token punctuation">(</span>self<span class="token punctuation">.</span>model<span class="token punctuation">.</span>parameters<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lr<span class="token operator">=</span><span class="token number">5e-5</span><span class="token punctuation">)</span>
        num_training_steps <span class="token operator">=</span> self<span class="token punctuation">.</span>num_epochs <span class="token operator">*</span> <span class="token builtin">len</span><span class="token punctuation">(</span>train_dataloader<span class="token punctuation">)</span>
        lr_scheduler <span class="token operator">=</span> get_scheduler<span class="token punctuation">(</span>
            name<span class="token operator">=</span><span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span> optimizer<span class="token operator">=</span>optimizer<span class="token punctuation">,</span> num_warmup_steps<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> num_training_steps<span class="token operator">=</span>num_training_steps
        <span class="token punctuation">)</span>

        <span class="token keyword">for</span> epoch <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>num_epochs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>epoch<span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>model<span class="token punctuation">.</span>train<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">for</span> batch <span class="token keyword">in</span> train_dataloader<span class="token punctuation">:</span>
                batch <span class="token operator">=</span> <span class="token punctuation">{</span>k<span class="token punctuation">:</span> v<span class="token punctuation">.</span>to<span class="token punctuation">(</span>self<span class="token punctuation">.</span>device<span class="token punctuation">)</span> <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> batch<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                outputs <span class="token operator">=</span> self<span class="token punctuation">.</span>model<span class="token punctuation">(</span><span class="token operator">**</span>batch<span class="token punctuation">)</span>
                loss <span class="token operator">=</span> outputs<span class="token punctuation">.</span>loss

                loss<span class="token punctuation">.</span>backward<span class="token punctuation">(</span><span class="token punctuation">)</span>
                optimizer<span class="token punctuation">.</span>step<span class="token punctuation">(</span><span class="token punctuation">)</span>
                lr_scheduler<span class="token punctuation">.</span>step<span class="token punctuation">(</span><span class="token punctuation">)</span>
                optimizer<span class="token punctuation">.</span>zero_grad<span class="token punctuation">(</span><span class="token punctuation">)</span>

            self<span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">for</span> batch <span class="token keyword">in</span> eval_dataloader<span class="token punctuation">:</span>
                batch <span class="token operator">=</span> <span class="token punctuation">{</span>k<span class="token punctuation">:</span> v<span class="token punctuation">.</span>to<span class="token punctuation">(</span>self<span class="token punctuation">.</span>device<span class="token punctuation">)</span> <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> batch<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token keyword">with</span> torch<span class="token punctuation">.</span>no_grad<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                    outputs <span class="token operator">=</span> self<span class="token punctuation">.</span>model<span class="token punctuation">(</span><span class="token operator">**</span>batch<span class="token punctuation">)</span>  <span class="token comment"># -1 would thus map to the last dimension, -2 to the preceding one, etc.</span>
                logits <span class="token operator">=</span> outputs<span class="token punctuation">.</span>logits
                predictions <span class="token operator">=</span> torch<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span>logits<span class="token punctuation">,</span> dim<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>epoch<span class="token punctuation">,</span> loss<span class="token punctuation">)</span>

            eval_df <span class="token operator">=</span> df_with_splitmark<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>df_with_splitmark<span class="token punctuation">[</span><span class="token string">&quot;splitmark&quot;</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> eval_df<span class="token punctuation">.</span>index<span class="token punctuation">:</span>
                result <span class="token operator">=</span> self<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>eval_df<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                eval_df<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>i<span class="token punctuation">,</span><span class="token string">&#39;predict_num&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span>result<span class="token punctuation">[</span><span class="token string">&quot;num&quot;</span><span class="token punctuation">]</span>
                eval_df<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>i<span class="token punctuation">,</span> <span class="token string">&#39;predict_labels&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> result<span class="token punctuation">[</span><span class="token string">&quot;labels&quot;</span><span class="token punctuation">]</span>
            confusion_df<span class="token operator">=</span>self<span class="token punctuation">.</span>evaluate<span class="token punctuation">(</span>eval_df<span class="token punctuation">[</span><span class="token string">&quot;labels&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>eval_df<span class="token punctuation">[</span><span class="token string">&quot;predict_labels&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>save_all<span class="token punctuation">(</span>df_with_splitmark<span class="token punctuation">,</span>eval_df<span class="token punctuation">,</span>confusion_df<span class="token punctuation">,</span>epoch<span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">one_stop_train</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>df<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        train, evaluate and save model&amp;tokenizer&amp;data

        Args:
            df: original dataFrame

        Returns:
            none

        &quot;&quot;&quot;</span>
        <span class="token punctuation">[</span>train_dataloader<span class="token punctuation">,</span>eval_dataloader<span class="token punctuation">,</span>df_with_splitmark<span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>data_process<span class="token punctuation">(</span>df<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>train<span class="token punctuation">(</span>train_dataloader<span class="token punctuation">,</span>eval_dataloader<span class="token punctuation">,</span>df_with_splitmark<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">predict</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>text<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        predict using model

        Args:
            text (str): one sentence

        Returns (dict):
            &quot;num&quot;: lable mapped to num
            &quot;labels&quot;: num mapped to label
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        data <span class="token operator">=</span> self<span class="token punctuation">.</span>tokenizer<span class="token punctuation">(</span>text<span class="token punctuation">,</span> truncation<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>max_length<span class="token operator">=</span><span class="token number">512</span><span class="token punctuation">)</span>
        data <span class="token operator">=</span> <span class="token punctuation">{</span>k<span class="token punctuation">:</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">(</span>self<span class="token punctuation">.</span>device<span class="token punctuation">)</span> <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> data<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token keyword">with</span> torch<span class="token punctuation">.</span>no_grad<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            outputs <span class="token operator">=</span> self<span class="token punctuation">.</span>model<span class="token punctuation">(</span><span class="token operator">**</span>data<span class="token punctuation">)</span>
        result <span class="token operator">=</span> torch<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span>outputs<span class="token punctuation">.</span>logits<span class="token punctuation">,</span> dim<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">(</span><span class="token string">&quot;cpu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>numpy<span class="token punctuation">(</span><span class="token punctuation">)</span>
        result <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;num&quot;</span><span class="token punctuation">:</span>result<span class="token punctuation">,</span><span class="token string">&quot;labels&quot;</span><span class="token punctuation">:</span>self<span class="token punctuation">.</span>classLabel<span class="token punctuation">.</span>int2str<span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">}</span>

    <span class="token keyword">def</span> <span class="token function">evaluate</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>labels_series<span class="token punctuation">,</span>predictLabels_series<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        create confusion matrix.

        Args:
            labels_series (pandas.Series): marked labels
            predictLabel_series (pandas.Series): predict labels

        Returns:
            confusion_df (pandas.DataFrame): confusion df that inclues all class recall and precision

        &quot;&quot;&quot;</span>
        confusion_df <span class="token operator">=</span> pd<span class="token punctuation">.</span>crosstab<span class="token punctuation">(</span>labels_series<span class="token punctuation">,</span>predictLabels_series<span class="token punctuation">,</span> dropna<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
        cha <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span>confusion_df<span class="token punctuation">.</span>columns<span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token builtin">set</span><span class="token punctuation">(</span>confusion_df<span class="token punctuation">.</span>index<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>cha<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>confusion_df<span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token builtin">len</span><span class="token punctuation">(</span>confusion_df<span class="token punctuation">.</span>columns<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                confusion_df<span class="token punctuation">.</span>loc<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span>cha<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token number">0</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                confusion_df<span class="token punctuation">.</span>loc<span class="token punctuation">[</span>cha<span class="token punctuation">,</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span>
        confusion_df <span class="token operator">=</span> confusion_df<span class="token punctuation">.</span>reindex<span class="token punctuation">(</span>index<span class="token operator">=</span>self<span class="token punctuation">.</span>classLabel<span class="token punctuation">.</span>names<span class="token punctuation">,</span>columns<span class="token operator">=</span>self<span class="token punctuation">.</span>classLabel<span class="token punctuation">.</span>names<span class="token punctuation">)</span>
        precision <span class="token operator">=</span> confusion_df<span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">[</span>x<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">/</span> x<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">if</span> x<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!=</span><span class="token number">0</span> <span class="token keyword">else</span> <span class="token number">0</span><span class="token punctuation">)</span>
        recall <span class="token operator">=</span> confusion_df<span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">[</span>x<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">/</span> x<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">if</span> x<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!=</span><span class="token number">0</span> <span class="token keyword">else</span> <span class="token number">0</span><span class="token punctuation">,</span>axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
        confusion_df<span class="token punctuation">.</span>loc<span class="token punctuation">[</span><span class="token string">&quot;precision&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> precision
        confusion_df<span class="token punctuation">.</span>loc<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span><span class="token string">&quot;recall&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span>recall
        <span class="token keyword">return</span> confusion_df

    <span class="token keyword">def</span> <span class="token function">save_all</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>df_with_splitmark<span class="token punctuation">,</span>eval_df<span class="token punctuation">,</span>confusion_df<span class="token punctuation">,</span>epoch<span class="token punctuation">)</span><span class="token punctuation">:</span>
        new_model_path_with_epoch <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>new_model_path<span class="token punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token punctuation">{</span>epoch<span class="token punctuation">}</span></span><span class="token string">/&quot;</span></span>
        path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;./</span><span class="token interpolation"><span class="token punctuation">{</span>new_model_path_with_epoch<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        path<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>model<span class="token punctuation">.</span>save_pretrained<span class="token punctuation">(</span>new_model_path_with_epoch<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>tokenizer<span class="token punctuation">.</span>save_pretrained<span class="token punctuation">(</span>new_model_path_with_epoch<span class="token punctuation">)</span>
        df_with_splitmark<span class="token punctuation">.</span>to_csv<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>new_model_path_with_epoch<span class="token punctuation">}</span></span><span class="token string">df_with_splitmark.csv&quot;</span></span><span class="token punctuation">)</span>
        eval_df<span class="token punctuation">.</span>to_csv<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>new_model_path_with_epoch<span class="token punctuation">}</span></span><span class="token string">eval_df.csv&quot;</span></span><span class="token punctuation">)</span>
        confusion_df<span class="token punctuation">.</span>to_csv<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>new_model_path_with_epoch<span class="token punctuation">}</span></span><span class="token string">confusion_df.csv&quot;</span></span><span class="token punctuation">)</span>





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","class.html.vue"]]);export{d as default};
