Foreman::Application.routes.draw do
  mount FusorNg::Engine, :at => '/', :as => 'hostgroups'
end
