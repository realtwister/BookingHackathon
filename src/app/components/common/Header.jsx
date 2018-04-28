import React from 'react';
import {Link} from 'react-router';

function Header() {
  return (<header>
    <div id="top" class="" role="banner">
      <div class="header-wrapper">
        <a class="js-header__logo " href="https://www.booking.com/index.nl.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;click_from_logo=1" style="text-decoration: none;">
          <img id="logo_no_globe_new_logo" class="" src="https://s-ec.bstatic.com/static/img/b26logo/booking_logo_retina/22615963add19ac6b6d715a97c8d477e8b95b7ea.png" alt="Booking.com online hotelreserveringen"></a>
          <div id="user_form" class="ticker_space smaller_booking_nr_login user_center_bar">
            <ul class="user_center_nav">
              <li data-priority="1" data-id="currency_selector" class="user_center_option uc_currency js-uc-currency">
                <input type="hidden" name="selected_currency" value="EUR">
                  <a href="javascript:void(0);" class="popover_trigger js-header-currency-button " data-title="Kies uw munteenheid" data-google-track="Click/Action: searchresults/header_currency_link_box" aria-label="Kies uw valuta. U gebruikt nu Euro">
                    €
                  </a>
                  <div class="user_center_popover narrow center_arrow uc_currency" role="dialog" tabindex="0" aria-label="Valuta-opties">
                    <div class="uc_top_arrow"></div>
                    <div class="popover_content" id="current_currency">
                      <div style="padding:20px;">
                        <img src="https://t-ec.bstatic.com/static/img/uc_ajax_loader/44d20cd12a233cfc196701b40a8c2a86faf03cbf.gif" alt="Bezig met laden">
                          <p>
                            Bezig met laden
                          </p>
                        </div>
                      </div>
                      <div class="uc_bottom_arrow"></div>
                    </div>
                  </li>
                  <!-- language selection -->
                  <li data-priority="1" class="user_center_option uc_language js-uc-language" data-id="language_selector">
                    <a href="javascript:void(0);" class="popover_trigger js-header-language-button" data-title="Kies uw taal" data-google-track="Click/Action: searchresults/header_lang_select_link_box" aria-label="Kies uw taal. U gebruikt nu Nederlands">
                      <img src="https://s-ec.bstatic.com/static/img/flags/24/nl/0ae9e811c10df3f99e04c0751cdea41d9c2787a1.png" alt="Nederlands"></a>
                      <div class="user_center_popover narrow center_arrow" role="dialog" aria-label="Pop-up voor taalkeuze" aria-describedby="language-popup-description" tabindex="0">
                        <div class="uc_top_arrow"></div>
                        <div class="js-uc-language-content popover_content" id="current_language">
                          <p class="popover_explain" id="language-popup-description">
                            Kies uw voorkeurstaal. Website en klantenservice in het Nederlands en nog 42 andere talen
                          </p>
                          <div id="current_language_foldout" class="select_foldout small_flags_foldout">
                            <div class="select_foldout_wrap">
                              <h4>Meest gebruikte talen in Nederland</h4>
                              <div role="menu">
                                <ul class="language_flags" role="none">
                                  <li class="lang_nl selected_country" data-lang="nl" role="menuitemradio" aria-checked="true">
                                    <a href="/searchresults.nl.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=nl;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=top;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-nl"></span>
                                      </span>
                                      <span class="seldescription">
                                        Nederlands
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_en-gb" data-lang="en-gb" role="menuitemradio">
                                    <a href="/searchresults.en-gb.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=en-gb;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=top;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-gb"></span>
                                      </span>
                                      <span class="seldescription">
                                        English (UK)
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                </ul>
                                <ul class="language_flags" role="none">
                                  <li class="lang_en-us" data-lang="en-us" role="menuitemradio">
                                    <a href="/searchresults.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=en-us;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=top;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-us"></span>
                                      </span>
                                      <span class="seldescription">
                                        English (US)
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_de" data-lang="de" role="menuitemradio">
                                    <a href="/searchresults.de.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=de;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=top;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-de"></span>
                                      </span>
                                      <span class="seldescription">
                                        Deutsch
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                </ul>
                                <ul class="language_flags" role="none">
                                  <li class="lang_zh-cn" data-lang="zh-cn" role="menuitemradio">
                                    <a href="/searchresults.zh-cn.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=zh-cn;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=top;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-cn"></span>
                                      </span>
                                      <span class="seldescription">
                                        简体中文
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_es" data-lang="es" role="menuitemradio">
                                    <a href="/searchresults.es.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=es;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=top;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-es"></span>
                                      </span>
                                      <span class="seldescription">
                                        Español
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="select_foldout_wrap">
                              <h4>Alle talen</h4>
                              <div role="menu">
                                <ul class="language_flags" role="none">
                                  <li class="lang_en-gb" data-lang="en-gb" role="menuitemradio">
                                    <a href="/searchresults.en-gb.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=en-gb;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-gb"></span>
                                      </span>
                                      <span class="seldescription">
                                        English (UK)
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_en-us" data-lang="en-us" role="menuitemradio">
                                    <a href="/searchresults.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=en-us;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-us"></span>
                                      </span>
                                      <span class="seldescription">
                                        English (US)
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_de" data-lang="de" role="menuitemradio">
                                    <a href="/searchresults.de.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=de;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-de"></span>
                                      </span>
                                      <span class="seldescription">
                                        Deutsch
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_nl selected_country" data-lang="nl" role="menuitemradio" aria-checked="true">
                                    <a href="/searchresults.nl.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=nl;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-nl"></span>
                                      </span>
                                      <span class="seldescription">
                                        Nederlands
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_fr" data-lang="fr" role="menuitemradio">
                                    <a href="/searchresults.fr.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=fr;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-fr"></span>
                                      </span>
                                      <span class="seldescription">
                                        Français
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_es" data-lang="es" role="menuitemradio">
                                    <a href="/searchresults.es.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=es;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-es"></span>
                                      </span>
                                      <span class="seldescription">
                                        Español
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_es-ar" data-lang="es-ar" role="menuitemradio">
                                    <a href="/searchresults.es-ar.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=es-ar;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-ar"></span>
                                      </span>
                                      <span class="seldescription">
                                        Español (AR)
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_ca" data-lang="ca" role="menuitemradio">
                                    <a href="/searchresults.ca.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=ca;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-catalonia"></span>
                                      </span>
                                      <span class="seldescription">
                                        Català
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_it" data-lang="it" role="menuitemradio">
                                    <a href="/searchresults.it.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=it;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-it"></span>
                                      </span>
                                      <span class="seldescription">
                                        Italiano
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_pt-pt" data-lang="pt-pt" role="menuitemradio">
                                    <a href="/searchresults.pt-pt.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=pt-pt;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-pt"></span>
                                      </span>
                                      <span class="seldescription">
                                        Português (PT)
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_pt-br" data-lang="pt-br" role="menuitemradio">
                                    <a href="/searchresults.pt-br.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=pt-br;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-br"></span>
                                      </span>
                                      <span class="seldescription">
                                        Português (BR)
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_no" data-lang="no" role="menuitemradio">
                                    <a href="/searchresults.no.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=no;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-no"></span>
                                      </span>
                                      <span class="seldescription">
                                        Norsk
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_fi" data-lang="fi" role="menuitemradio">
                                    <a href="/searchresults.fi.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=fi;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-fi"></span>
                                      </span>
                                      <span class="seldescription">
                                        Suomi
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_sv" data-lang="sv" role="menuitemradio">
                                    <a href="/searchresults.sv.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=sv;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-se"></span>
                                      </span>
                                      <span class="seldescription">
                                        Svenska
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_da" data-lang="da" role="menuitemradio">
                                    <a href="/searchresults.da.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=da;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-dk"></span>
                                      </span>
                                      <span class="seldescription">
                                        Dansk
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                </ul>
                                <ul class="language_flags" role="none">
                                  <li class="lang_cs" data-lang="cs" role="menuitemradio">
                                    <a href="/searchresults.cs.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=cs;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-cz"></span>
                                      </span>
                                      <span class="seldescription">
                                        Čeština
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_hu" data-lang="hu" role="menuitemradio">
                                    <a href="/searchresults.hu.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=hu;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-hu"></span>
                                      </span>
                                      <span class="seldescription">
                                        Magyar
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_ro" data-lang="ro" role="menuitemradio">
                                    <a href="/searchresults.ro.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=ro;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-ro"></span>
                                      </span>
                                      <span class="seldescription">
                                        Română
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_ja" data-lang="ja" role="menuitemradio">
                                    <a href="/searchresults.ja.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=ja;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-jp"></span>
                                      </span>
                                      <span class="seldescription">
                                        日本語
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_zh-cn" data-lang="zh-cn" role="menuitemradio">
                                    <a href="/searchresults.zh-cn.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=zh-cn;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-cn"></span>
                                      </span>
                                      <span class="seldescription">
                                        简体中文
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_zh-tw" data-lang="zh-tw" role="menuitemradio">
                                    <a href="/searchresults.zh-tw.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=zh-tw;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-z4"></span>
                                      </span>
                                      <span class="seldescription">
                                        繁體中文
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_pl" data-lang="pl" role="menuitemradio">
                                    <a href="/searchresults.pl.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=pl;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-pl"></span>
                                      </span>
                                      <span class="seldescription">
                                        Polski
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_el" data-lang="el" role="menuitemradio">
                                    <a href="/searchresults.el.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=el;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-gr"></span>
                                      </span>
                                      <span class="seldescription">
                                        Ελληνικά
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_ru" data-lang="ru" role="menuitemradio">
                                    <a href="/searchresults.ru.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=ru;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-ru"></span>
                                      </span>
                                      <span class="seldescription">
                                        Русский
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_tr" data-lang="tr" role="menuitemradio">
                                    <a href="/searchresults.tr.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=tr;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-tr"></span>
                                      </span>
                                      <span class="seldescription">
                                        Türkçe
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_bg" data-lang="bg" role="menuitemradio">
                                    <a href="/searchresults.bg.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=bg;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-bg"></span>
                                      </span>
                                      <span class="seldescription">
                                        Български
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_ar" data-lang="ar" role="menuitemradio">
                                    <a href="/searchresults.ar.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=ar;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-sa"></span>
                                      </span>
                                      <span class="seldescription">
                                        العربية
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_ko" data-lang="ko" role="menuitemradio">
                                    <a href="/searchresults.ko.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=ko;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-kr"></span>
                                      </span>
                                      <span class="seldescription">
                                        한국어
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_he" data-lang="he" role="menuitemradio">
                                    <a href="/searchresults.he.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=he;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-il"></span>
                                      </span>
                                      <span class="seldescription">
                                        עברית
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_lv" data-lang="lv" role="menuitemradio">
                                    <a href="/searchresults.lv.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=lv;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-lv"></span>
                                      </span>
                                      <span class="seldescription">
                                        Latviski
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                </ul>
                                <ul class="language_flags" role="none">
                                  <li class="lang_uk" data-lang="uk" role="menuitemradio">
                                    <a href="/searchresults.uk.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=uk;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-ua"></span>
                                      </span>
                                      <span class="seldescription">
                                        Українська
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_id" data-lang="id" role="menuitemradio">
                                    <a href="/searchresults.id.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=id;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-id"></span>
                                      </span>
                                      <span class="seldescription">
                                        Bahasa Indonesia
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_ms" data-lang="ms" role="menuitemradio">
                                    <a href="/searchresults.ms.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=ms;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-my"></span>
                                      </span>
                                      <span class="seldescription">
                                        Bahasa Malaysia
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_th" data-lang="th" role="menuitemradio">
                                    <a href="/searchresults.th.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=th;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-th"></span>
                                      </span>
                                      <span class="seldescription">
                                        ภาษาไทย
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_et" data-lang="et" role="menuitemradio">
                                    <a href="/searchresults.et.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=et;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-ee"></span>
                                      </span>
                                      <span class="seldescription">
                                        Eesti
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_hr" data-lang="hr" role="menuitemradio">
                                    <a href="/searchresults.hr.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=hr;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-hr"></span>
                                      </span>
                                      <span class="seldescription">
                                        Hrvatski
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_lt" data-lang="lt" role="menuitemradio">
                                    <a href="/searchresults.lt.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=lt;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-lt"></span>
                                      </span>
                                      <span class="seldescription">
                                        Lietuvių
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_sk" data-lang="sk" role="menuitemradio">
                                    <a href="/searchresults.sk.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=sk;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-sk"></span>
                                      </span>
                                      <span class="seldescription">
                                        Slovenčina
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_sr" data-lang="sr" role="menuitemradio">
                                    <a href="/searchresults.sr.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=sr;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-rs"></span>
                                      </span>
                                      <span class="seldescription">
                                        Srpski
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_sl" data-lang="sl" role="menuitemradio">
                                    <a href="/searchresults.sl.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=sl;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-si"></span>
                                      </span>
                                      <span class="seldescription">
                                        Slovenščina
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_vi" data-lang="vi" role="menuitemradio">
                                    <a href="/searchresults.vi.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=vi;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-vn"></span>
                                      </span>
                                      <span class="seldescription">
                                        Tiếng Việt
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_tl" data-lang="tl" role="menuitemradio">
                                    <a href="/searchresults.tl.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=tl;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-ph"></span>
                                      </span>
                                      <span class="seldescription">
                                        Filipino
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                  <li class="lang_is" data-lang="is" role="menuitemradio">
                                    <a href="/searchresults.is.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;city=-28309;class_interval=1;dest_id=-28309;dest_type=city;dtdisc=0;from_idr=1;ilp=1;inac=0;index_postcard=0;label_click=undef;lang=is;offset=0;postcard=0;room1=A%2CA;sb_price_type=total;soz=1;ss_all=0;ssb=empty;sshis=0;lang_click=other;cdl=nl" class="no_target_blank js-header-dropdown-language-link">
                                      <span class="selsymbol">
                                        <span class="flag_16 sflag slang-is"></span>
                                      </span>
                                      <span class="seldescription">
                                        Íslenska
                                      </span>
                                      <i class="loading_indicator"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="uc_bottom_arrow"></div>
                      </div>
                    </li>
                    <li data-priority="5" class="user_center_option" style="display: list-item;">
                      <a class="popover-trigger js-raf-center-bar-link" href="https://secure.booking.com/myreferrals.nl.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM;sid=95454949552e39273c6b8f5eb0b4c868;rafftl=1;source=34;" target="_blank">
                        Profiteer van Vriendenvoordeel
                      </a>
                    </li>
                    <li data-priority="3" id="add_property_topbar" class="user_center_option uc_account" style="display: list-item;">
                      <a href="https://join.booking.com/?lang=nl&amp;utm_source=topbar&amp;utm_medium=frontend&amp;label=gen173nr-1FCAEoggJCAlhYSDNYBGipAYgBAZgBHMIBA3gxMcgBDNgBAegBAfgBC5ICAXmoAgM&amp;aid=304142" target="_blank" data-ga-track="click|Top nav|Click - List your Property|searchresults" class="signin_cta
profile_menu_trigger
add-property__button
js-disable-popover
remove_hover_sign_in_btn
remove_padding_register_btn_right">
                        <div class="sign_in_wrapper sign_in_wrapper-add-property">
                          <span>
                            Registreer uw accommodatie
                          </span>
                        </div>
                      </a>
                    </li>
                    <li data-priority="2" class="user_center_option uc_account uc_account-center-item" data-command="show-auth-lightbox" data-command-params="tab=signup;extraClass=user-access-menu-lightbox--user-center;btn=header" id="current_account_create" style="display: list-item;">
                      <a href="javascript:void(0);" class="
popover_trigger signin_cta
profile_menu_trigger
js-disable-popover
remove_hover_sign_in_btn
remove_padding_register_btn_right
" data-google-track="Click/Action: searchresults/header_logged_out_link_box" data-et-click="OTfdASFbeCadTbEOFZQAYO:1" data-title="Word lid voor exclusieve geheime deals" id="b_tt_holder_2">
                        <div class="sign_in_wrapper">
                          <span>
                            Registreren
                          </span>
                        </div>
                      </a>
                    </li>
                    <li data-priority="2" class="account_register_option user_center_option uc_account" data-et-click="
" data-component=" dropdown-onload-shower" data-component-delay=" 2000" data-component-position=" bottom="bottom" right" data-component-content=" header_signin_prompt" data-component-show-once-key=" header_signin_prompt" data-component-ignore-clicks-class=" #cookie_warning="#cookie_warning" .close_warning" data-command=" show-auth-lightbox" data-command-params=" tab="signin;extraClass=user-access-menu-lightbox--user-center;btn=header" id="" current_account" style=" display:="display:" block;"="block;"">
                      <a href="javascript:void(0);" class="
popover_trigger signin_cta
profile_menu_trigger
js-disable-popover
remove_hover_sign_in_btn
" data-google-track="Click/Action: searchresults/header_logged_out_link_box" data-et-click="OTfdASFbeCadTbEOFZQAYO:1" data-title="Boek sneller met uw opgeslagen gegevens" id="b_tt_holder_1">
                        <div class="sign_in_wrapper">
                          <span>
                            Inloggen
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>
          </header>
          )
}

export default Header;
