import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as r,a}from"./app-7knaTE3M.js";const e={},i=a('<h1 id="random" tabindex="-1"><a class="header-anchor" href="#random" aria-hidden="true">#</a> random</h1><p>以下方法都要加np.random.前缀 <strong>注意生成的对象没有维度.既.shape属性,第二个数字是空.要用reshape来将它转换为多维度,这样才能像矩阵那样操作.</strong></p><p>1.简单随机数据</p><table><thead><tr><th>name</th><th>describe</th></tr></thead><tbody><tr><td>rand(d0, d1, ..., dn)</td><td>返回随机分布,d是维度的意思，既设置0维度数量，1维度数量</td></tr><tr><td>randn(d0, d1, ..., dn)</td><td>返回正态分布</td></tr><tr><td>randint(low[, high, size, dtype])</td><td>返回一个范围在 low (包含) 到 high (不包含)的整数.</td></tr><tr><td>random_integers(low[, high, size])</td><td>Random integers of type np.int between low and high, inclusive.</td></tr><tr><td>random_sample([size])</td><td>Return random floats in the half-open interval [0.0, 1.0).</td></tr><tr><td>random([size])</td><td>Return random floats in the half-open interval [0.0, 1.0).</td></tr><tr><td>ranf([size])</td><td>Return random floats in the half-open interval [0.0, 1.0).</td></tr><tr><td>sample([size])</td><td>Return random floats in the half-open interval [0.0, 1.0).</td></tr><tr><td>choice(a[, size, replace, p])</td><td>Generates a random sample from a given 1-D array</td></tr><tr><td>bytes(length)</td><td>Return random bytes.</td></tr><tr><td>2.生成随机分布</td><td></td></tr><tr><td>name</td><td>describe</td></tr><tr><td>--</td><td>--</td></tr><tr><td>beta(a, b[, size])</td><td>Draw samples from a Beta distribution.</td></tr><tr><td>binomial(n, p[, size])</td><td>Draw samples from a binomial distribution.</td></tr><tr><td>chisquare(df[, size])</td><td>Draw samples from a chi-square distribution.</td></tr><tr><td>dirichlet(alpha[, size])</td><td>Draw samples from the Dirichlet distribution.</td></tr><tr><td>exponential([scale, size])</td><td>Draw samples from an exponential distribution.</td></tr><tr><td>f(dfnum, dfden[, size])</td><td>Draw samples from an F distribution.</td></tr><tr><td>gamma(shape[, scale, size])</td><td>Draw samples from a Gamma distribution.</td></tr><tr><td>geometric(p[, size])</td><td>Draw samples from the geometric distribution.</td></tr><tr><td>gumbel([loc, scale, size])</td><td>Draw samples from a Gumbel distribution.</td></tr><tr><td>hypergeometric(ngood, nbad, nsample[, size])</td><td>Draw samples from a Hypergeometric distribution.</td></tr><tr><td>laplace([loc, scale, size])</td><td>Draw samples from the Laplace or double exponential distribution with specified logistic([loc, scale, size]) Draw samples from a logistic distribution.</td></tr><tr><td>lognormal([mean, sigma, size])</td><td>Draw samples from a log-normal distribution.</td></tr><tr><td>logseries(p[, size])</td><td>Draw samples from a logarithmic series distribution.</td></tr><tr><td>multinomial(n, pvals[, size])</td><td>Draw samples from a multinomial distribution.</td></tr><tr><td>multivariate_normal(mean, cov[, size])</td><td>Draw random samples from a multivariate normal distribution.</td></tr><tr><td>negative_binomial(n, p[, size])</td><td>Draw samples from a negative binomial distribution.</td></tr><tr><td>noncentral_chisquare(df, nonc[, size])</td><td>Draw samples from a noncentral chi-square distribution.</td></tr><tr><td>noncentral_f(dfnum, dfden, nonc[, size])</td><td>Draw samples from the noncentral F distribution.</td></tr><tr><td>normal([loc, scale, size])</td><td>Draw random samples from a normal (Gaussian) distribution.</td></tr><tr><td>pareto(a[, size])</td><td>Draw samples from a Pareto II or Lomax distribution with specified shape.</td></tr><tr><td>poisson([lam, size])</td><td>Draw samples from a Poisson distribution.</td></tr><tr><td>power(a[, size])</td><td>Draws samples in [0, 1] from a power distribution with positive exponent a - 1.</td></tr><tr><td>rayleigh([scale, size])</td><td>Draw samples from a Rayleigh distribution.</td></tr><tr><td>standard_cauchy([size])</td><td>Draw samples from a standard Cauchy distribution with mode = 0.</td></tr><tr><td>standard_exponential([size])</td><td>Draw samples from the standard exponential distribution.</td></tr><tr><td>standard_gamma(shape[, size])</td><td>Draw samples from a standard Gamma distribution.</td></tr><tr><td>standard_normal([size])</td><td>Draw samples from a standard Normal distribution (mean=0, stdev=1).</td></tr><tr><td>standard_t(df[, size])</td><td>Draw samples from a standard Student’s t distribution with df degrees of freedom.</td></tr><tr><td>triangular(left, mode, right[, size])</td><td>Draw samples from the triangular distribution over the interval [left, right].</td></tr><tr><td>uniform([low, high, size])</td><td>Draw samples from a uniform distribution.</td></tr><tr><td>vonmises(mu, kappa[, size])</td><td>Draw samples from a von Mises distribution.</td></tr><tr><td>wald(mean, scale[, size])</td><td>Draw samples from a Wald, or inverse Gaussian, distribution.</td></tr><tr><td>weibull(a[, size])</td><td>Draw samples from a Weibull distribution.</td></tr><tr><td>zipf(a[, size])</td><td>Draw samples from a Zipf distribution.</td></tr><tr><td>3.重排</td><td></td></tr><tr><td>name</td><td>describe</td></tr><tr><td>--</td><td>--</td></tr><tr><td>shuffle(x)</td><td>Modify a sequence in-place by shuffling its contents.</td></tr><tr><td>permutation(x)</td><td>Randomly permute a sequence, or return a permuted range.</td></tr><tr><td>参考:</td><td></td></tr><tr><td>https://docs.scipy.org/doc/numpy/reference/routines.random.html</td><td></td></tr></tbody></table>',4),s=[i];function n(o,m){return d(),r("div",null,s)}const u=t(e,[["render",n],["__file","7随机方法.html.vue"]]);export{u as default};
