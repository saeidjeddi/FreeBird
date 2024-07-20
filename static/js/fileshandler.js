function backItem(){
    var item = `
    <div class="file-item">
        <div class="file-item-icon file-item-level-up fas fa-level-up-alt text-secondary"></div>
        <a href="javascript:void(0)" class="file-item-name">
            ..
        </a>
    </div>
    `;
    return item;
}

function folderItem(id, name){
    var item_folder = `
        <div class="file-item" id="file-${id}">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <div class="file-item-icon fas fa-folder text-secondary"></div>
            <a href="javascript:void(0)" class="file-item-name">
                ${name}
            </a>
            <div class="file-item-changed">02/13/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-dropdown btn-sm  icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>
    `;
    return  item_folder;
}


function imageItem(id, name, url){
    var image_item = `
    <div class="file-item" id="file-${id}">
        <div class="file-item-select-bg bg-primary"></div>
        <label class="file-item-checkbox custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" />
            <span class="custom-control-label"></span>
        </label>
        
        <a href="${url}" target="_blank"><div class="file-item-img" style="background-image: url(${url});"></div></a>
        <a href="${url}" target="_blank" class="file-item-name">
            ${name}
        </a>
        <div class="file-item-changed">02/20/2018</div>
        <div class="file-item-actions btn-group">
            <button type="button" class="btn btn-dropdown btn-sm  icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
            <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                <a class="dropdown-item" href="javascript:void(0)">Move</a>
                <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                <a class="dropdown-item" href="javascript:void(0)">Remove</a>
            </div>
        </div>
    </div>
    `;
    return image_item;
}


function pdfItem(id, name, url){
    var pdf_item = `
        <div class="file-item" id="file-${id}">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <a href="${url}"><div class="file-item-icon fas fa-file-pdf text-secondary"></div></a>
            <a href="${url}" class="file-item-name">
                ${name}
            </a>
            <div class="file-item-changed">02/25/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-dropdown btn-sm  icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>
    `;
    return pdf_item;
}


function compressedItem(id, name, url){
    var compressed_item = `
        <div class="file-item" id="file-${id}">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <a href="${url}"><div class="file-item-icon fas fa-file-archive text-secondary"></div></a>
            <a href="${url}" class="file-item-name">
                 ${name}
            </a>
            <div class="file-item-changed">02/16/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-dropdown btn-sm  icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>
    `;
    return compressed_item;
}

function videoItem(id, name, url){
    var video_item = `
        <div class="file-item" id="file-${id}">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <a href="${url}"><div class="file-item-icon fas fa-file-video text-secondary"></div></a>
            <a href="${url}" class="file-item-name">
                 ${name}
            </a>
            <div class="file-item-changed">02/16/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-dropdown btn-sm  icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>
    `;
    return video_item;
}

function docItem(id, name, url){
    var doc_item = `
        <div class="file-item" id="file-${id}">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <a href="${url}"><div class="file-item-icon fas fa-file-word text-secondary"></div></a>
            <a href="${url}" class="file-item-name">
                 ${name}
            </a>
            <div class="file-item-changed">02/16/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-dropdown btn-sm  icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>
    `;
    return doc_item;
}

function textItem(id, name, url){
    var text_item = `
        <div class="file-item" id="file-${id}">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <a href="${url}"><div class="file-item-icon fas fa-file-alt text-secondary"></div></a>
            <a href="${url}" class="file-item-name">
                 ${name}
            </a>
            <div class="file-item-changed">02/16/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-dropdown btn-sm  icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>
    `;
    return text_item;
}

function otherItem(id, name, url){
    var other_item = `
        <div class="file-item" id="file-${id}">
            <div class="file-item-select-bg bg-primary"></div>
            <label class="file-item-checkbox custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label"></span>
            </label>
            <a href="${url}"><div class="file-item-icon fas fa-file text-secondary"></div></a>
            <a href="${url}" class="file-item-name">
                 ${name}
            </a>
            <div class="file-item-changed">02/16/2018</div>
            <div class="file-item-actions btn-group">
                <button type="button" class="btn btn-dropdown btn-sm  icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i class="ion ion-ios-more"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:void(0)">Rename</a>
                    <a class="dropdown-item" href="javascript:void(0)">Move</a>
                    <a class="dropdown-item" href="javascript:void(0)">Copy</a>
                    <a class="dropdown-item" href="javascript:void(0)">Remove</a>
                </div>
            </div>
        </div>
    `;
    return other_item;
}